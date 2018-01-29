class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
    this.direction = "up";
    this.setInterval;
  }
  start() {
    this.setInterval = setInterval(() => {
      this.update();
      if (this.direction == "up") {
        this.floorUp();
      }else {this.floorDown()}
    }, 1000);
  }
  stop() {
    clearInterval(this.setInterval);
    this.checkWaitingList();
    this.checkPassengersList();
    if(this.requests.length > 0){
    this.start()}
  }
  update() {
    if (this.requests.length == 0){
      this.stop()
      console.log ("no one left in the elevator");
    }
    return this.log();
  }
  _passengersEnter(ind) {
    this.passengers.push(this.waitingList[ind]);
    console.log(this.waitingList[ind].name + " has enter the elevator");
    this.requests.push(this.waitingList[ind].destinationFloor);
    this.waitingList.splice(ind, 1);
  }
  _passengersLeave(ind) {
    console.log(this.passengers[ind].name + " has left the elevator");
    this.passengers.splice(ind, 1);
  }
  floorUp() {
    this.checkRequestsList();
    if (this.floor < this.MAXFLOOR && this.direction == "up") {
      this.floor++;
    } else {
      this.direction = "down";
      this.floorDown();
    }
  }

  floorDown() {
    this.checkRequestsList();
    if (this.floor > 0 && this.direction == "down") {
      this.floor--;
    } else {
      this.direction = "up";
      this.floorUp();
    }
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
  log() {
    console.log(this.floor);
  }
  checkWaitingList() {
    for (let i = 0; i < this.waitingList.length; i++) {
      if (this.waitingList[i].originFloor == this.floor) {
        this._passengersEnter(i);
      }
    }
  }
  checkPassengersList() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].destinationFloor == this.floor) {
        this._passengersLeave(i);
      }
    }
  }
  checkRequestsList() {
    for (let i = 0; i < this.requests.length; i++) {
      if (this.floor == this.requests[i]) {
        this.requests.splice(i,1);
        this.stop();
      }
    }
  }
}

module.exports = Elevator;
