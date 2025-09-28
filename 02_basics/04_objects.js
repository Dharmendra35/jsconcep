//const tinderUser = new Object()

//const tinderUser = {};

//only diff is that first is singleton object
//and second is non-singleton object

const tinderUser = {};
tinderUser.name = "Dharmendr";
tinderUser.email = "3344e33@gmail.com";
tinderUser.location = "Bihar";
//console.log(tinderUser);

//chaining of objects
const regularUser = {
  email: "43rtewt@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Dharmendra",
      lastname: "Kumar",
    },
  },
};

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.firstname);

//merge or combine of object
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

//const obj3 = {obj1, obj3} //this will give two obj inside obj3
//const obj3 = Object.assign({}, obj1, obj2); //{target, source}
const obj4 = Object.assign(obj1, obj2); //work fine also

//using spread operator
const obj3 = { ...obj1, ...obj2 };
//console.log(obj3);

//when data comes from databases
const user = [{}, {}, {}];

user[1].email;
user[2].name;

//console.log(tinderUser);
/*
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
this will return the arr of keys and values simulateously=> o/p
[ 'name', 'email', 'location' ]
[ 'Dharmendr', '3344e33@gmail.com', 'Bihar' ]
*/

/*
console.log(Object.entries(tinderUser));//this will give arr of arr of [key and value]  => o/p
[
  [ 'name', 'Dharmendr' ],
  [ 'email', '3344e33@gmail.com' ],
  [ 'location', 'Bihar' ]
]
*/

//console.log(tinderUser.hasOwnProperty("name")); =>give that property is exist or not

//Destructring of Objects
const course = {
  courseName: "love with Physics",
  fee: "999",
  courseInstructer: "Dharmendra sir",
};

//course.courseInstructer; //it is ok, but we can also access it using destructiong it

//const {courseInstructer} = course;   //syntax => {attributes} = objectName
//as courseInstructer is big => we can give it own name
const { courseInstructer: instucter } = course;
console.log(instucter);

/*we get data from api in from of json
what is json => is it like object , but it has no name
in it keys are also in string , and values also in string
{
  "name" : "Dharmendra",
  "course" : "Love with Physics",
  "price" : "526" 
}

//also we will get data in form of array from api

[{}, {}, {}, {}] like this

*/
