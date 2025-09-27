const arr1 = ["Ram", "Shayam", "Mohan"];
const arr2 = ["Sita", "Gita", "Rita"];

arr1.push(arr1);
console.log(arr1);

const mergeArr = arr1.concat(arr2); //return a new array
console.log(mergeArr);

const arr3 = [...arr1, arr2]; //using spread operator
console.log(arr3);

console.log(Array.isArray("Dharmendra"));
console.log(Array.from("Dharmendra")); //['D', 'h', 'a', 'r', 'm']
console.log(Array.from({ Name: "Dharmendra" })); //can't understand make array from keys, or from val => and return []
