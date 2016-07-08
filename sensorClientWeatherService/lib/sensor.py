#!/usr/bin/python2

# written by sqall
# twitter: https://twitter.com/sqall01
# blog: http://blog.h4des.org
# github: https://github.com/sqall01
#
# Licensed under the GNU Public License, version 2.

import time
import random
import os
import logging
import json
import httplib
import threading
from client import AsynchronousSender
from localObjects import SensorDataType, SensorAlert, StateChange


# Internal class that holds the important attributes
# for a sensor to work (this class must be inherited from the
# used sensor class).
class _PollingSensor:

	def __init__(self):

		# Id of this sensor on this client. Will be handled as
		# "remoteSensorId" by the server.
		self.id = None

		# Description of this sensor.
		self.description = None

		# Delay in seconds this sensor has before a sensor alert is
		# issued by the server.
		self.alertDelay = None

		# Local state of the sensor (either 1 or 0). This state is translated
		# (with the help of "triggerState") into 1 = "triggered" / 0 = "normal"
		# when it is send to the server.
		self.state = None

		# State the sensor counts as triggered (either 1 or 0).
		self.triggerState = None

		# A list of alert levels this sensor belongs to.
		self.alertLevels = list()

		# Flag that indicates if this sensor should trigger a sensor alert
		# for the state "triggered" (true or false).
		self.triggerAlert = None

		# Flag that indicates if this sensor should trigger a sensor alert
		# for the state "normal" (true or false).
		self.triggerAlertNormal = None

		# The type of data the sensor holds (i.e., none at all, integer, ...).
		# Type is given by the enum class "SensorDataType".
		self.sensorDataType = None

		# The actual data the sensor holds.
		self.sensorData = None

		# Flag indicates if this sensor alert also holds
		# the data the sensor has. For example, the data send
		# with this alarm message could be the data that triggered
		# the alarm, but not necessarily the data the sensor
		# currently holds. Therefore, this flag indicates
		# if the data contained by this message is also the
		# current data of the sensor and can be used for example
		# to update the data the sensor has.
		self.hasLatestData = None

		# Flag that indicates if a sensor alert that is send to the server
		# should also change the state of the sensor accordingly. This flag
		# can be useful if the sensor watches multiple entities. For example,
		# a timeout sensor could watch multiple hosts and has the state
		# "triggered" when at least one host has timed out. When one host
		# connects back and still at least one host is timed out,
		# the sensor can still issue a sensor alert for the "normal"
		# state of the host that connected back, but the sensor
		# can still has the state "triggered".
		self.changeState = None

		# Optional data that can be transfered when a sensor alert is issued.
		self.hasOptionalData = False
		self.optionalData = None


	# this function returns the current state of the sensor
	def getState(self):
		raise NotImplementedError("Function not implemented yet.")


	# this function updates the state variable of the sensor
	def updateState(self):
		raise NotImplementedError("Function not implemented yet.")


	# This function initializes the sensor.
	#
	# Returns True or False depending on the success of the initialization.
	def initializeSensor(self):
		raise NotImplementedError("Function not implemented yet.")


	# This function decides if a sensor alert for this sensor should be sent
	# to the server. It is checked regularly and can be used to force
	# a sensor alert despite the state of the sensor has not changed.
	#
	# Returns an object of class SensorAlert if a sensor alert should be sent
	# or None.
	def forceSendAlert(self):
		raise NotImplementedError("Function not implemented yet.")


	# This function decides if an update for this sensor should be sent
	# to the server. It is checked regularly and can be used to force an update
	# of the state and data of this sensor to be sent to the server.
	#
	# Returns an object of class StateChange if a sensor alert should be sent
	# or None.
	def forceSendState(self):
		raise NotImplementedError("Function not implemented yet.")


# Class that controls one temperature sensor for Wunderground
class WundergroundTempPollingSensor(_PollingSensor):

	def __init__(self):
		_PollingSensor.__init__(self)

		# Used for logging.
		self.fileName = os.path.basename(__file__)

		# Set sensor to hold float data.
		self.sensorDataType = SensorDataType.FLOAT

		self.host = "api.wunderground.com"
		self.port = 80

		self._forceSendState = False

		# Instance of data collector thread.
		self.dataCollector = None

		self.country = None
		self.city = None


	def initializeSensor(self):
		self.hasLatestData = False
		self.changeState = False
		self.state = 1 - self.triggerState

		# Update data directly for the first time.
		self.updateState()

		return True


	def getState(self):
		return self.state


	def updateState(self):
		temp = self.dataCollector.getTemperature(self.country, self.city)
		if temp != self.sensorData:
			self.sensorData = temp
			self._forceSendState = True


	def forceSendAlert(self):
		return None


	def forceSendState(self):
		if self._forceSendState:
			self._forceSendState = False

			stateChange = StateChange()
			stateChange.clientSensorId = self.id
			if self.state == self.triggerState:
				stateChange.state = 1
			else:
				stateChange.state = 0
			stateChange.dataType = self.sensorDataType
			stateChange.sensorData = self.sensorData

			return stateChange
		return None


# Class that controls one humidity sensor for Wunderground
class WundergroundHumidityPollingSensor(_PollingSensor):

	def __init__(self):
		_PollingSensor.__init__(self)

		# Used for logging.
		self.fileName = os.path.basename(__file__)

		# Set sensor to hold float data.
		self.sensorDataType = SensorDataType.INT

		self._forceSendState = False

		# Instance of data collector thread.
		self.dataCollector = None

		self.country = None
		self.city = None


	def initializeSensor(self):
		self.hasLatestData = False
		self.changeState = False
		self.state = 1 - self.triggerState

		# Update data directly for the first time.
		self.updateState()

		return True


	def getState(self):
		return self.state


	def updateState(self):
		temp = self.dataCollector.getHumidity(self.country, self.city)
		if temp != self.sensorData:
			self.sensorData = temp
			self._forceSendState = True


	def forceSendAlert(self):
		return None


	def forceSendState(self):
		if self._forceSendState:
			self._forceSendState = False

			stateChange = StateChange()
			stateChange.clientSensorId = self.id
			if self.state == self.triggerState:
				stateChange.state = 1
			else:
				stateChange.state = 0
			stateChange.dataType = self.sensorDataType
			stateChange.sensorData = self.sensorData

			return stateChange
		return None


# Class that collects data from Wunderground.
class WundergroundDataCollector(threading.Thread):


	def __init__(self, globalData):
		threading.Thread.__init__(self)
		self.fileName = os.path.basename(__file__)
		self.globalData = globalData

		self.updateLock = threading.Semaphore(1)

		self.host = "api.wunderground.com"
		self.port = 80

		# Api key of wunderground.
		self.apiKey = None

		# Interval in seconds in which the data is fetched.
		self.interval = None

		# List of tuples in the form [(country, city), ...]
		self.locations = list()

		# Dictionary that holds the data that is collected in the form:
		# collectedData[<country>][<city>]["temp"/"humidity"]
		self.collectedData = dict()


	def addLocation(self, country, city):
		tempCountry = country.lower()
		tempCity = city.lower()

		# Check if location is already registered.
		for location in self.locations:
			if (location[0] == tempCountry
				and location[1] == tempCity):
				return

		# check if location is already in locations list
		self.locations.append( (tempCountry, tempCity) )

		# Add locations to data collection.
		if not tempCountry in self.collectedData.keys():
			self.collectedData[tempCountry] = dict()
		if not tempCity in self.collectedData[tempCountry].keys():
			self.collectedData[tempCountry][tempCity] = dict()
			self.collectedData[tempCountry][tempCity]["temp"] = float(-1000)
			self.collectedData[tempCountry][tempCity]["humidity"] = -1000


	def getTemperature(self, country, city):
		tempCountry = country.lower()
		tempCity = city.lower()

		self.updateLock.acquire()
		temp = self.collectedData[tempCountry][tempCity]["temp"]
		self.updateLock.release()
		return temp


	def getHumidity(self, country, city):
		tempCountry = country.lower()
		tempCity = city.lower()

		self.updateLock.acquire()
		humidity = self.collectedData[tempCountry][tempCity]["humidity"]
		self.updateLock.release()
		return humidity


	def run(self):

		logging.info("[%s]: Starting Wunderground data collector thread."
			% self.fileName)

		while True:

			for locationTuple in self.locations:

				country = locationTuple[0]
				city = locationTuple[1]

				logging.debug("[%s]: Getting weather data from "
					% self.fileName
					+ "Wunderground for %s in %s."
					% (city, country))

				try:
					# Get weather data from Wunderground
					conn = httplib.HTTPConnection(self.host, self.port)
					location = "/api/" + self.apiKey \
						+ "/geolookup/conditions/forecast/q/" + country \
						+ "/" + city + ".json"
					conn.request("GET", location)
					response = conn.getresponse()

					# Extract data.
					if response.status == 200:
						jsonData =  json.loads(response.read())

						humidity = int(jsonData["current_observation"][
							"relative_humidity"].replace("%", ""))
						temp = float(jsonData["current_observation"]["temp_c"])

						self.updateLock.acquire()
						self.collectedData[country][city]["humidity"] \
							= humidity
						self.collectedData[country][city]["temp"] \
							= temp
						self.updateLock.release()

						logging.info("[%s]: Received new humidity data "
							% self.fileName
							+ "from Wunderground: %d%% for %s in %s."
							% (humidity, city, country))

						logging.info("[%s]: Received new temperature data "
							% self.fileName
							+ "from Wunderground: %.1f degrees Celsius "
							% temp
							+ "for %s in %s."
							% (city, country))

					else:
						logging.error("[%s]: Received response code %d "
							% (self.fileName, response.status)
							+ "from Wunderground.")

						self.updateLock.acquire()
						self.collectedData[country][city]["humidity"] \
							= -998
						self.collectedData[country][city]["temp"] \
							= float(-998)
						self.updateLock.release()

				except Exception as e:
					logging.exception("[%s]: Could not get weather data "
						% self.fileName
						+ "for %s in %s."
						% (city, country))
					self.updateLock.acquire()
					self.collectedData[country][city]["humidity"] \
						= -999
					self.collectedData[country][city]["temp"] \
						= float(-999)
					self.updateLock.release()

			# Sleep until next update cycle.
			time.sleep(self.interval)


# this class polls the sensor states and triggers alerts and state changes
class SensorExecuter:

	def __init__(self, globalData):
		self.fileName = os.path.basename(__file__)
		self.globalData = globalData
		self.connection = self.globalData.serverComm
		self.sensors = self.globalData.sensors

		# Flag indicates if the thread is initialized.
		self._isInitialized = False


	def isInitialized(self):
		return self._isInitialized


	def execute(self):

		# time on which the last full sensor states were sent
		# to the server
		lastFullStateSent = 0

		# Get reference to server communication object.
		while self.connection is None:
			time.sleep(0.5)
			self.connection = self.globalData.serverComm

		self._isInitialized = True

		while True:

			# check if the client is connected to the server
			# => wait and continue loop until client is connected
			if not self.connection.isConnected():
				time.sleep(0.5)
				continue

			# poll all sensors and check their states
			for sensor in self.sensors:

				oldState = sensor.getState()
				sensor.updateState()
				currentState = sensor.getState()

				# Check if a sensor alert is forced to send to the server.
				# => update already known state and continue
				sensorAlert = sensor.forceSendAlert()
				if sensorAlert:
					oldState = currentState

					asyncSenderProcess = AsynchronousSender(
						self.connection, self.globalData)
					# set thread to daemon
					# => threads terminates when main thread terminates
					asyncSenderProcess.daemon = True
					asyncSenderProcess.sendSensorAlert = True
					asyncSenderProcess.sendSensorAlertSensorAlert = sensorAlert
					asyncSenderProcess.start()

					continue

				# check if the current state is the same
				# than the already known state => continue
				elif oldState == currentState:
					continue

				# check if the current state is an alert triggering state
				elif currentState == sensor.triggerState:

					# check if the sensor triggers a sensor alert
					# => send sensor alert to server
					if sensor.triggerAlert:

						logging.info("[%s]: Sensor alert " % self.fileName
							+ "triggered by '%s'." % sensor.description)

						# Create sensor alert object to send to the server.
						sensorAlert = SensorAlert()
						sensorAlert.clientSensorId = sensor.id
						sensorAlert.state = 1
						sensorAlert.hasOptionalData = sensor.hasOptionalData
						sensorAlert.optionalData = sensor.optionalData
						sensorAlert.changeState = sensor.changeState
						sensorAlert.hasLatestData = sensor.hasLatestData
						sensorAlert.dataType = sensor.sensorDataType
						sensorAlert.sensorData = sensor.sensorData

						asyncSenderProcess = AsynchronousSender(
							self.connection, self.globalData)
						# set thread to daemon
						# => threads terminates when main thread terminates
						asyncSenderProcess.daemon = True
						asyncSenderProcess.sendSensorAlert = True
						asyncSenderProcess.sendSensorAlertSensorAlert = \
							sensorAlert
						asyncSenderProcess.start()

					# if sensor does not trigger sensor alert
					# => just send changed state to server
					else:

						logging.debug("[%s]: State " % self.fileName
							+ "changed by '%s'." % sensor.description)

						# Create state change object to send to the server.
						stateChange = StateChange()
						stateChange.clientSensorId = sensor.id
						stateChange.state = 1
						stateChange.dataType = sensor.sensorDataType
						stateChange.sensorData = sensor.sensorData

						asyncSenderProcess = AsynchronousSender(
							self.connection, self.globalData)
						# set thread to daemon
						# => threads terminates when main thread terminates
						asyncSenderProcess.daemon = True
						asyncSenderProcess.sendStateChange = True
						asyncSenderProcess.sendStateChangeStateChange = \
							stateChange
						asyncSenderProcess.start()

				# only possible situation left => sensor changed
				# back from triggering state to a normal state
				else:

					# check if the sensor triggers a sensor alert when
					# state is back to normal
					# => send sensor alert to server
					if sensor.triggerAlertNormal:

						logging.info("[%s]: Sensor alert " % self.fileName
							+ "for back to normal state "
							+ "triggered by '%s'." % sensor.description)

						# Create sensor alert object to send to the server.
						sensorAlert = SensorAlert()
						sensorAlert.clientSensorId = sensor.id
						sensorAlert.state = 0
						sensorAlert.hasOptionalData = sensor.hasOptionalData
						sensorAlert.optionalData = sensor.optionalData
						sensorAlert.changeState = sensor.changeState
						sensorAlert.hasLatestData = sensor.hasLatestData
						sensorAlert.dataType = sensor.sensorDataType
						sensorAlert.sensorData = sensor.sensorData

						asyncSenderProcess = AsynchronousSender(
							self.connection, self.globalData)
						# set thread to daemon
						# => threads terminates when main thread terminates
						asyncSenderProcess.daemon = True
						asyncSenderProcess.sendSensorAlert = True
						asyncSenderProcess.sendSensorAlertSensorAlert = \
							sensorAlert
						asyncSenderProcess.start()

					# if sensor does not trigger sensor alert when
					# state is back to normal
					# => just send changed state to server
					else:

						logging.debug("[%s]: State " % self.fileName
							+ "changed by '%s'." % sensor.description)

						# Create state change object to send to the server.
						stateChange = StateChange()
						stateChange.clientSensorId = sensor.id
						stateChange.state = 0
						stateChange.dataType = sensor.sensorDataType
						stateChange.sensorData = sensor.sensorData

						asyncSenderProcess = AsynchronousSender(
							self.connection, self.globalData)
						# set thread to daemon
						# => threads terminates when main thread terminates
						asyncSenderProcess.daemon = True
						asyncSenderProcess.sendStateChange = True
						asyncSenderProcess.sendStateChangeStateChange = \
							stateChange
						asyncSenderProcess.start()

			# Poll all sensors if they want to force an update that should
			# be send to the server.
			for sensor in self.sensors:

				stateChange = sensor.forceSendState()
				if stateChange:
					asyncSenderProcess = AsynchronousSender(
						self.connection, self.globalData)
					# set thread to daemon
					# => threads terminates when main thread terminates
					asyncSenderProcess.daemon = True
					asyncSenderProcess.sendStateChange = True
					asyncSenderProcess.sendStateChangeStateChange = stateChange
					asyncSenderProcess.start()

			# check if the last state that was sent to the server
			# is older than 60 seconds => send state update
			if (time.time() - lastFullStateSent) > 60:

				logging.debug("[%s]: Last state " % self.fileName
					+ "timed out.")

				asyncSenderProcess = AsynchronousSender(
					self.connection, self.globalData)
				# set thread to daemon
				# => threads terminates when main thread terminates
				asyncSenderProcess.daemon = True
				asyncSenderProcess.sendSensorsState = True
				asyncSenderProcess.start()

				# update time on which the full state update was sent
				lastFullStateSent = time.time()

			time.sleep(0.5)