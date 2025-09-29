const myArr = ["ram", "sita", "gita"];
//for each loop
//syntax->  myArr.forEach(callbackfun)
//callback fucn has no name
//callbackfun -> function(item){}

// myArr.forEach(function (val) {
//   console.log(val);
// });

// //foreach using arrow func
// myArr.forEach((item) => {
//   console.log(item);
// });

//passing reference of another function as callback
// function printMe(item) {
//   console.log(item);
// }

//myArr.forEach(printMe);

//forEach has not only one parameter -> (item, item, arr)
// myAr.forEach((item, ind, arr) => {
//   console.log(item, ind, arr);
// });

//iteration on arr having objects inside
const items = [
  { item: "apple", cost: 38 },
  {
    item: "banana",
    cost: 34,
  },
];

items.forEach((it) => {
  console.log(`item is ${it.item} whose price is ${it.cost}`);
});
