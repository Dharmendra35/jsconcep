//for in loop -> give key

const myObj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
};

for (const key in myObj) {
  console.log(`${key} is shortcut for ${myObj[key]}`);
}

//for in , also give key(means ind) in case of arr
const arr = ["ram", "sita", "gita"];
for (const key in arr) {
  console.log(`elem at ind ${key} is ${arr[key]}`);
}

//for in -> not iterable to map
