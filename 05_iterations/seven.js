//map method
const arr = [1, 3, 5, 6, 7, 7];
// const newArr = arr.map((num) => {
//   return num + 4;
// });

//chaining
const newArr = arr
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 50);

console.log(newArr);
