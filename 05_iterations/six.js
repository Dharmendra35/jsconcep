// const arr = ["ran", "gas", "tann"];

// const val = arr.forEach((item) => {
//   console.log(item);
// });
//console.log(val);//forEach loop does't return any val -> it will log undefined

//++++++++++++++++++filters++++++++++//
const arr = [1, 3, 5, 4, 6, 7];
//syntax -> arr.filter(callback)
//callback -> (() => condition)
//it returns the val

const newArr = arr.filter((item) => item > 3);
//use return when {} bracket used in arrow func
const newArr2 = arr.filter((item) => {
  return item > 4;
});
console.log(newArr);
console.log(newArr2);

//if we want to do same operation of filter using for each
const newArr3 = [];
arr.forEach((item) => {
  if (item > 3) {
    newArr3.push(item);
  }
});

console.log(newArr3);
