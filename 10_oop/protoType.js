// let myName = "Dharmendra      ";
// let myAim = "43lpa            ";
// //we want to make a property truelength
// console.log(myName.truelength);

const myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

//we can add an method in object, which will applicable on arr, object, string all

Object.prototype.dharmendra = function () {
  console.log("dharmendra");
};

heroPower.dharmendra();
myHeros.dharmendra();

//but if we add a method in ARRAY , it will not available on object
Array.prototype.heyDharmendra = function () {
  console.log(`Dharmendra say Hello`);
};

myHeros.heyDharmendra();
//heroPower.heyDharmendra(); //this will give err, as this method not available on object

//inheritance
const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVedio: true,
};

Teacher.__proto__ = User; // here teacher has inherited all prop of User

const TeachingSupport = {
  isAvailable: true,
};

const TASupport = {
  makeAssignment: "js assignment",
  fullTime: true,
  __proto__: TeachingSupport, //this is also method to inherit
};

//modern syntax
//Object.setPrototypeOf(Children, parent)
Object.setPrototypeOf(TeachingSupport, Teacher);

//here we are adding a method in string to get trueLen
const anotherUsername = "Dharmendra          ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True len is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hello".trueLength();
"sfsfs   ".trueLength();
