//singleton => when object is created with constructor
//object.create()

//object literals => singleton nhi banta h
const jsUser = {
  name: "Dharmendra",
  "full name": "kushwaha", //no way to acces it using . notation
  age: 22,
  location: "Bihar",
  email: "dk2494839@gmail.com",
  isLoggedIn: false,
  lastLoggedIn: ["Monday", "friday"],
};

//two method to acces the object
// . notation & []
/*
console.log(jsUser.age);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); //only in this way it will access
*/

//to change the object's attributes
jsUser.email = "allu2949@gmal.com";

//to lock the object => so that changes will not happen
//Object.freeze(jsUser);

//if we want to use a symbol as a key in obj
//first declare it outside
const mySymbol = Symbol("key1");
const person = {
  [mySymbol]: "Ram",
};

//console.log(person);

//adding functions in object
jsUser.greeting = function () {
  console.log(`Hello js User welcome ${this.name}`);
};

//console.log(jsUser.greeting); //function does't exicute , function reference get backed
console.log(jsUser.greeting());
jsUser.greeting();

/*
Now the important part:
console.log(jsUser.greeting());


jsUser.greeting() → calls the function → prints:

Hello js User welcome Dharmendra


But since the function does not return anything, it implicitly returns undefined.
So the console.log(...) around it will print:

Hello js User welcome Dharmendra
undefined
*/
