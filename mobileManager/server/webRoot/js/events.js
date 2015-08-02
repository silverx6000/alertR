function addEventChangeAlert(eventsTable, oldDescription, newDescription) {

	// add old description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Old description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = oldDescription;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add new description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "New description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = newDescription;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventChangeManager(eventsTable, oldDescription, newDescription) {

	// add old description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Old description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = oldDescription;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add new description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "New description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = newDescription;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventChangeOption(eventsTable, optionType, oldValue, newValue) {

	// add option type to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Option type:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = optionType;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add old value to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Old value:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	if(optionType == "alertSystemActive") {
		if(oldValue == 1) {
			newTd.className = "activatedTd";
			newTd.textContent = "activated"
		}
		else {
			newTd.className = "deactivatedTd";
			newTd.textContent = "deactivated"
		}
	}
	else {
		newTd.className = "neutralTd";
		newTd.textContent = oldValue;
	}
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add new value to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "New value:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	if(optionType == "alertSystemActive") {
		if(newValue == 1) {
			newTd.className = "activatedTd";
			newTd.textContent = "activated"
		}
		else {
			newTd.className = "deactivatedTd";
			newTd.textContent = "deactivated"
		}
	}
	else {
		newTd.className = "neutralTd";
		newTd.textContent = newValue;
	}
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventChangeNode(eventsTable, oldHostname, oldNodeType,
	oldInstance, oldVersion, oldRev, newHostname, newNodeType, newInstance,
	newVersion, newRev) {

	// add old hostname to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Old hostname:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = oldHostname;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add new hostname to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "New hostname:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = newHostname;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add old node type to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Old node type:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = oldNodeType;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add new node type to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "New node type:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = newNodeType;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add old instance to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Old instance:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = oldInstance;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add new instance to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "New instance:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = newInstance;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add old version to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Old version:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = oldVersion;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add new version to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "New version:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = newVersion;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add old revision to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Old revision:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = oldRev;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add new revision to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "New revision:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = newRev;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventChangeSensor(eventsTable, oldAlertDelay, oldDescription,
	newAlertDelay, newDescription) {

	// add old alert delay to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Old alert delay:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = oldAlertDelay;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add new alert delay to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "New alert delay:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = newAlertDelay;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add old description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Old description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = oldDescription;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add new description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "New description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = newDescription;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventConnectedChange(eventsTable, hostname, nodeType, instance,
	connected) {

	// add hostname to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Hostname:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = hostname;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add nodeType to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Node type:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = nodeType;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add instance to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Instance:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = instance;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add connected to the output
	event_AddConnectedOutput(eventsTable, connected);

}


function addEventDeleteAlert(eventsTable, description) {

	// add description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = description;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventDeleteManager(eventsTable, description) {

	// add description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = description;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventDeleteNode(eventsTable, hostname, nodeType, instance) {

	// add hostname to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Hostname:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = hostname;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add nodeType to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Node type:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = nodeType;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add instance to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Instance:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = instance;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventDeleteSensor(eventsTable, description) {

	// add description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = description;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventNewAlert(eventsTable, hostname, description) {

	// add hostname to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Hostname:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = hostname;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = description;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventNewManager(eventsTable, hostname, description) {

	// add hostname to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Hostname:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = hostname;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = description;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventNewNode(eventsTable, hostname, nodeType, instance) {

	// add hostname to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Hostname:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = hostname;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add nodeType to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Node type:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = nodeType;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add instance to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Instance:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = instance;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventNewOption(eventsTable, optionType, value) {

	// add optionType to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Option type:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = optionType;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add value to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Value:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	if(optionType == "alertSystemActive") {
		if(value == 1) {
			newTd.className = "activatedTd";
			newTd.textContent = "activated"
		}
		else {
			newTd.className = "deactivatedTd";
			newTd.textContent = "deactivated"
		}
	}
	else {
		newTd.className = "neutralTd";
		newTd.textContent = value;
	}
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventNewSensor(eventsTable, hostname, description, state) {

	// add hostname to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Hostname:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = hostname;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = description;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add state to the output
	event_AddStateOutput(eventsTable, state);

}


function addEventNewVersion(eventsTable, usedVersion, usedRev, newVersion,
	newRev, instance, hostname) {

	// add hostname to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Hostname:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = hostname;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add instance to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Instance:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = instance;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add used version to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Used version:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = usedVersion;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add new version to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "New version:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = newVersion;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add used revision to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Used revision:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = usedRev;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add new revision to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "New revision:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = newRev;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function addEventSensorAlert(eventsTable, description, state) {

	// add description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = description;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add state to the output
	event_AddStateOutput(eventsTable, state);

}


function addEventSensorTimeOut(eventsTable, hostname, description, state) {

	// add hostname to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Hostname:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = hostname;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = description;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add state to the output
	event_AddStateOutput(eventsTable, state);

}


function addEventStateChange(eventsTable, hostname, description, state) {

	// add hostname to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Hostname:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = hostname;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add description to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Description:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newTd.textContent = description;
	newTd.className = "neutralTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);


	// add state to the output
	event_AddStateOutput(eventsTable, state);

}


function event_AddStateOutput(eventsTable, state) {

	// add state to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "State:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	if(state == 1) {
		newTd.className = "triggeredTd";
		newTd.textContent = "triggered"
	}
	else {
		newTd.className = "okTd";
		newTd.textContent = "normal"
	}
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}


function event_AddConnectedOutput(eventsTable, connected) {

	// add connected to the event
	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	newB = document.createElement("b");
	newB.textContent = "Connected:";
	newTd.appendChild(newB);
	newTd.className = "boxEntryTd";
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

	newTr = document.createElement("tr");
	newTd = document.createElement("td");
	if(connected == 1) {
		newTd.className = "okTd";
		newTd.textContent = "true";
	}
	else {
		newTd.className = "failTd";
		newTd.textContent = "false";
	}
	newTr.appendChild(newTd);
	eventsTable.appendChild(newTr);

}