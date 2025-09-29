//reduce method -> use to sum up total elem
//syntax -> arr.reduce(callback)
//callback -> ((accumulator, currVal) => accumulator + currVal, initialVal)

const arr = [1, 2, 3, 4, 5];

const sumWithIntialVal = arr.reduce((total, currVal) => total + currVal, 0);
console.log(sumWithIntialVal);

const course = [
  { item: "java", price: 85 },
  { item: "c++", price: 57 },
  { item: "c", price: 58 },
];

const totalPrice = course.reduce((total, it) => total + it.price, 0);
console.log(totalPrice);
