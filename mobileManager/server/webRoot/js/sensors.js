// set global configuration variables
var request = new XMLHttpRequest();


// processes the response of the server for the
// requested data
function processResponse() {
	
	if (request.readyState == 4) {

		// remove old nodes output
		// and generate a new clear one
		var nodeTableObj = document.getElementById("contentTable");
		var newBody = document.createElement("tbody");
		var newTr = document.createElement("tr");
		var newTd = document.createElement("td");
		var newB = document.createElement("b");
		newB.textContent = "Nodes:";
		newTd.appendChild(newB);
		newTr.appendChild(newTd);
		newBody.appendChild(newTr);
		var oldBody = document.getElementById("contentTableBody");
		oldBody.removeAttribute("id");
		newBody.setAttribute("id", "contentTableBody");
		nodeTableObj.replaceChild(newBody, oldBody);
		delete oldBody;

		// get JSON response and parse it
		var response = request.responseText;
		var alertSystemInformation = JSON.parse(response);
		var internals = alertSystemInformation["internals"];
		var options = alertSystemInformation["options"];
		var nodes = alertSystemInformation["nodes"];
		var sensors = alertSystemInformation["sensors"];
		var managers = alertSystemInformation["managers"];
		var alerts = alertSystemInformation["alerts"];
		var alertLevels = alertSystemInformation["alertLevels"];

		// get server time
		var serverTime = 0.0;
		for(i = 0; i < internals.length; i++) {
			if(internals[i]["type"].toUpperCase() == "SERVERTIME") {
				var serverTime = internals[i]["value"]
			}
		}


		// add all nodes to the output
		for(i = 0; i < nodes.length; i++) {

			var nodeId = nodes[i]["id"];
			var hostname = nodes[i]["hostname"];
			var nodeType = nodes[i]["nodeType"];
			var instance = nodes[i]["instance"];
			var connected = nodes[i]["connected"];
			var version = nodes[i]["version"];
			var rev = nodes[i]["rev"];

			// skip if node is not of type sensor
			if(nodeType.toUpperCase() != "SENSOR") {
				continue;
			}

			var boxDiv = document.createElement("div");
			boxDiv.className = "box";

			var nodeTable = document.createElement("table");
			nodeTable.style.width = "100%";
			nodeTable.setAttribute("border", "0");
			boxDiv.appendChild(nodeTable);


			// add id to the node
			var newTr = document.createElement("tr");
			var newTd = document.createElement("td");
			newTd.textContent = "Node: " + nodeId;			
			newTd.className = "boxHeaderTd";
			newTr.appendChild(newTd);
			nodeTable.appendChild(newTr);


			// add hostname to the node
			var newTr = document.createElement("tr");
			var newTd = document.createElement("td");
			var newB = document.createElement("b");
			newB.textContent = "Hostname:";
			newTd.appendChild(newB);
			newTd.className = "boxEntryTd";
			newTr.appendChild(newTd);
			nodeTable.appendChild(newTr);

			var newTr = document.createElement("tr");
			var newTd = document.createElement("td");
			newTd.textContent = hostname;
			newTd.className = "neutralTd";
			newTr.appendChild(newTd);
			nodeTable.appendChild(newTr);


			// add instance to the node
			var newTr = document.createElement("tr");
			var newTd = document.createElement("td");
			var newB = document.createElement("b");
			newB.textContent = "Instance:";
			newTd.appendChild(newB);
			newTd.className = "boxEntryTd";
			newTr.appendChild(newTd);
			nodeTable.appendChild(newTr);

			var newTr = document.createElement("tr");
			var newTd = document.createElement("td");
			newTd.textContent = instance;
			newTd.className = "neutralTd";
			newTr.appendChild(newTd);
			nodeTable.appendChild(newTr);


			// add connected to the node
			var newTr = document.createElement("tr");
			var newTd = document.createElement("td");
			var newB = document.createElement("b");
			newB.textContent = "Connected:";
			newTd.appendChild(newB);
			newTd.className = "boxEntryTd";
			newTr.appendChild(newTd);
			nodeTable.appendChild(newTr);

			var newTr = document.createElement("tr");
			var newTd = document.createElement("td");
			if(connected == 0) {
				newTd.className = "failTd";
				newTd.textContent = "false";
			}
			else {
				newTd.className = "neutralTd";
				newTd.textContent = "true";
			}
			newTr.appendChild(newTd);
			nodeTable.appendChild(newTr);


			// get an array of sensors that are related to the current node
			var relatedSensors = [];
			for(j = 0; j < sensors.length; j++) {
				if(sensors[j]["nodeId"] == nodeId) {
					relatedSensors.push(sensors[j]);
				}
			}


			// add all sensors to the node
			for(j = 0; j < relatedSensors.length; j++) {

				var sensorId = relatedSensors[j]["id"];
				var description = relatedSensors[j]["description"];
				var lastStateUpdated = relatedSensors[j]["lastStateUpdated"];
				var state = relatedSensors[j]["state"];
				var relatedAlertLevels = relatedSensors[j]["alertLevels"];


				// create row for sensor output
				var newTr = document.createElement("tr");
				var newTd = document.createElement("td");
				newTr.appendChild(newTd);
				nodeTable.appendChild(newTr);


				// create sub box for sensor
				var subBoxDiv = document.createElement("div");
				subBoxDiv.className = "subbox";
				newTd.appendChild(subBoxDiv);


				// create new table for the sensor information
				var sensorTable = document.createElement("table");
				sensorTable.style.width = "100%";
				sensorTable.setAttribute("border", "0");
				subBoxDiv.appendChild(sensorTable);


				// add id to sensor
				var newTr = document.createElement("tr");
				var newTd = document.createElement("td");
				newTd.textContent = "Sensor: " + sensorId;			
				newTd.className = "boxHeaderTd";
				newTr.appendChild(newTd);
				sensorTable.appendChild(newTr);


				// add description to sensor
				var newTr = document.createElement("tr");
				var newTd = document.createElement("td");
				var newB = document.createElement("b");
				newB.textContent = "Description:";
				newTd.appendChild(newB);
				newTd.className = "boxEntryTd";
				newTr.appendChild(newTd);
				sensorTable.appendChild(newTr);

				var newTr = document.createElement("tr");
				var newTd = document.createElement("td");
				newTd.textContent = description;
				newTd.className = "neutralTd";
				newTr.appendChild(newTd);
				sensorTable.appendChild(newTr);


				// add state to sensor
				var newTr = document.createElement("tr");
				var newTd = document.createElement("td");
				var newB = document.createElement("b");
				newB.textContent = "State:";
				newTd.appendChild(newB);
				newTd.className = "boxEntryTd";
				newTr.appendChild(newTd);
				sensorTable.appendChild(newTr);

				var newTr = document.createElement("tr");
				var newTd = document.createElement("td"); 
				newTd.textContent = state;
				if(state == 1) {
					newTd.className = "triggeredTd";
				}
				else {
					newTd.className = "neutralTd";
				}
				newTr.appendChild(newTd);
				sensorTable.appendChild(newTr);


				// generate date string from timestamp
				localDate = new Date(lastStateUpdated * 1000);
				yearString = localDate.getFullYear();
				monthString =
					("0" + (localDate.getMonth() + 1)).slice(-2);
				dateString =
					("0" + localDate.getDate()).slice(-2);
				hoursString =
					("0" + localDate.getHours()).slice(-2);
				minutesString =
					("0" + localDate.getMinutes()).slice(-2);
				secondsString =
					("0" + localDate.getSeconds()).slice(-2);


				// add last updated state to the sensor
				var newTr = document.createElement("tr");
				var newTd = document.createElement("td");
				var newB = document.createElement("b");
				newB.textContent = "Last updated:";
				newTd.appendChild(newB);
				newTd.className = "boxEntryTd";
				newTr.appendChild(newTd);
				sensorTable.appendChild(newTr);

				var newTr = document.createElement("tr");
				var newTd = document.createElement("td");
				newTd.textContent = monthString + "/" + dateString + "/" +
					yearString + " " + hoursString + ":" +
					minutesString + ":" + secondsString;
				newTd.className = "neutralTd";
				newTr.appendChild(newTd);
				sensorTable.appendChild(newTr);
				// set color to red if the sensor has timed out
				if(lastStateUpdated < (serverTime - 2* 60)) {
					newTd.className = "failTd";
				}
				else {
					newTd.className = "neutralTd";
				}
				newTr.appendChild(newTd);
				sensorTable.appendChild(newTr);


				// output all related alertLevels of this sensor
				for(k = 0; k < relatedAlertLevels.length; k++) {
					for(l = 0; l < alertLevels.length; l++) {

						// output alertLevel when found
						if(relatedAlertLevels[k] == 
							alertLevels[l]["alertLevel"]) {

							var alertLevel = relatedAlertLevels[k];
							var name = alertLevels[l]["name"];


							// create row for alertLevel output
							var newTr = document.createElement("tr");
							var newTd = document.createElement("td");
							newTr.appendChild(newTd);
							sensorTable.appendChild(newTr);


							// create sub box for alertLevels
							var subSubBoxDiv = document.createElement("div");
							subSubBoxDiv.className = "subbox";
							newTd.appendChild(subSubBoxDiv);


							// create new table for the alertLevel information
							var alertLevelTable =
								document.createElement("table");
							alertLevelTable.style.width = "100%";
							alertLevelTable.setAttribute("border", "0");
							subSubBoxDiv.appendChild(alertLevelTable);


							// add alertLevel
							var newTr = document.createElement("tr");
							var newTd = document.createElement("td");
							newTd.textContent = "Alert Level: " + alertLevel;
							newTd.className = "boxHeaderTd";
							newTr.appendChild(newTd);
							alertLevelTable.appendChild(newTr);


							// add name to alertLevel
							var newTr = document.createElement("tr");
							var newTd = document.createElement("td");
							var newB = document.createElement("b");
							newB.textContent = "Name:";
							newTd.appendChild(newB);
							newTd.className = "boxEntryTd";
							newTr.appendChild(newTd);
							alertLevelTable.appendChild(newTr);

							var newTr = document.createElement("tr");
							var newTd = document.createElement("td");
							newTd.textContent = name;
							newTd.className = "neutralTd";
							newTr.appendChild(newTd);
							alertLevelTable.appendChild(newTr);

							break;

						}

					}
					
				}

			}


			// add node to the node table
			var nodeTableObj =
				document.getElementById("contentTableBody");
			var newTr = document.createElement("tr");
			var newTd = document.createElement("td");
			newTd.appendChild(boxDiv);
			newTr.appendChild(newTd);
			nodeTableObj.appendChild(newTr);

		}
	}
}


// requests the data of the alert system
function requestData() {
	var url = "./getJson.php";
	request.open("GET", url, true);
	request.onreadystatechange = processResponse;
	request.send(null);

	// wait 10 seconds before requesting the next data update
	window.setTimeout("requestData()", 10000);	
}

requestData();