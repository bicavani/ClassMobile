let Mobile = function (battery, idOfMessage) {
    this.idOfMessage = idOfMessage;
    this.status = "off";
    this.battery = battery;
    this.message = "";
    this.inbox = [];
    this.outbox = [];
    this.autoOff = function () {
        if (this.battery <= 0) {
            this.status = "off";
            this.battery = 0;
        }
    };
    this.displayBoxMessageNokia = function () {
        if (nokia.status === "on"){
            document.getElementById(idOfMessage).style.visibility = "";
        }
        else document.getElementById(idOfMessage).style.visibility = "hidden";
    };
    this.getStatus = function () {
        return this.status;
    };
    this.turnOn = function () {
        this.status = "on";
        this.battery--;
    };
    this.turnOff = function () {
        this.status = "off";
        this.battery--;
    };
    this.getNewMessage = function () {
        return document.getElementById(this.idOfMessage).value;
    };
    this.addNewMessage = function () {
        this.message = this.getNewMessage();
    };
    this.chargeBattery = function () {
        this.battery = battery;
    };
    this.sentMessage = function () {
        if (this.status === "on") {
            this.outbox.push(this.message);
            this.battery--;
            document.getElementById(this.idOfMessage).value = "";
        }
    };
    this.receiveMessage = function (msg) {
        if (this.status === "on") {
            this.inbox.push(msg);
            this.battery--;
        }
    };

    this.displayMessage = function (msg) {
        return document.write(msg + "<br>");
    };
    this.viewInbox = function () {
        if (this.status === "on"){
            for (let i = 0; i < this.inbox.length; i++){
                this.displayMessage(this.inbox[i]);
            }
        }
    };
    this.viewOutbox = function () {
        if (this.status === "on"){
            for (let i = 0; i < this.outbox.length; i++){
                 this.displayMessage(this.outbox[i]);
            }
        }
    }
};