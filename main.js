let nokia = new Mobile(20, "msg1");
let iphone = new Mobile(100, "msg2");
iphone.status = "on";
let countOfOutMsg = 0;
let countOfInMsg = 0;
function displayBattery(id, value) {
    document.getElementById(id).innerHTML = value;
}
function checkStatusOfMobile(mobile,idOfTurnOn, idOfTurnOff) {
    if (mobile.getStatus() ===  "on") {
        document.getElementById(idOfTurnOff).style = "";
        document.getElementById(idOfTurnOn).style = "box-shadow: 2px 2px red;";
    }
    else {
        document.getElementById(idOfTurnOn).style = "";
        document.getElementById(idOfTurnOff).style = "box-shadow: 2px 2px red;";
    }
}
displayBattery("batteryNokia", nokia.battery);
displayBattery("batteryIphone", iphone.battery);
checkStatusOfMobile(nokia, "turnOn1","turnOff1");
checkStatusOfMobile(iphone, "turnOn2", "turnOff2");
function turnOnNokia() {
    nokia.autoOff();
    if (nokia.status === "on") nokia.battery++;
    nokia.turnOn();
    nokia.autoOff();
    checkStatusOfMobile(nokia, "turnOn1","turnOff1");
    displayBattery("batteryNokia", nokia.battery);
    nokia.displayBoxMessageNokia();
}
function turnOffNokia() {
    if (nokia.status === "off") nokia.battery++;
    nokia.turnOff();
    nokia.autoOff();
    checkStatusOfMobile(nokia, "turnOn1","turnOff1");
    displayBattery("batteryNokia", nokia.battery);
    nokia.displayBoxMessageNokia();
}
function chargeNokia() {
    nokia.battery = 80;
    displayBattery("batteryNokia", nokia.battery);
}
function sentMessageInNokia() {
    if (nokia.getNewMessage() !== "") {
        nokia.addNewMessage();
        countOfOutMsg++;
        nokia.sentMessage();
        document.getElementById("viewSent1").innerHTML = countOfOutMsg + "new message";
        receiveMessageInIphone();
        displayBattery("batteryNokia", nokia.battery);
    }
    else {
        alert("Nhap noi dung tin nhan gui di!")
    }
}
function receiveMessageInIphone() {
    iphone.receiveMessage(nokia.message);
    countOfInMsg++;
    document.getElementById("viewInbox2").innerHTML = countOfInMsg + "new message";
}
function viewOutboxInNokia() {
    nokia.viewOutbox();
    countOfOutMsg = 0;
    document.getElementById("viewSent1").innerHTML = "Outbox";
}
function viewInboxInIphone() {
    iphone.viewInbox();
    countOfInMsg = 0;
    document.getElementById("viewInbox2").innerHTML = "Inbox";
}

// function turnOnIphone() {
//     iphone.turnOn();
//     checkStatusOfMobile(iphone, "turnOn2", "turnOff2");
// }
// function turnOffIphone() {
//     iphone.turnOff();
//     checkStatusOfMobile(iphone, "turnOn2", "turnOff2");
// }



