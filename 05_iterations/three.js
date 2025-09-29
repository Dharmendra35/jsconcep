//for of

//["", "", ""]
//[{}, {}, {}]

//syntax
// for (const it of arr) {
// }

const arr = [1, 3, 4, 5, 5];
for (const it of arr) {
  //console.log(it);
}

const greetings = "Hello Programmer";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`);
}

//Map -> store in form of key-val pair
//store unique val

const map = new Map();
map.set("IN", "india");
map.set("uae", "united arab emarates");
map.set("I", "india");

//console.log(map);
//use loop
// for (const key of map) {
//   console.log(key);
// }

for (const [key, val] of map) {
  console.log(key, ":-", val);
}

//note map is not iterable using for in
// for(const key in map){
//   console.log(key)
// }

/*
const myObj = {
  game1: "nfs",
  game2: "cfs",
};

obj is not iterable using for of loop
for (const [key, val] of map) {
  console.log(key, ":-", val);
}
*/
