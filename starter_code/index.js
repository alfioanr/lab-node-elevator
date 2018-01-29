const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator1 = new Elevator();
let person1 = new Person("alice",2,3)
let person2 = new Person("juan",2,1)
let person3 = new Person("pepe",2,7)
let person4 = new Person("jose",8,1)
let person5 = new Person("pedro",6,2)
elevator1.call(person1)
elevator1.call(person2)
elevator1.call(person3)
elevator1.call(person4)
elevator1.call(person5)


elevator1.start();
