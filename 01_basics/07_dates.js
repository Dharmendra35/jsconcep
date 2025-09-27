//note : typeof date is object
const myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON);
// console.log(myDate.toISOString);

//const newCreatedDate = new Date(2025, 0, 30);
const newCreatedDate = new Date("1-14-2025");
//console.log(newCreatedDate.toDateString());

const myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(newCreatedDate.getTime());

//to convert the time into seconds
//console.log(Math.floor(Date.now() / 1000));

const newDate = new Date();
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());

newDate.toLocaleString("default", {
  weekday: "long",
});
