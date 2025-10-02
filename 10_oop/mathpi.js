//PI is a constant -> can't change its value
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const discripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(discripter);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
//we can also create our own methods, and objects -> whose value will not changes
const chai = {
  name: "ginger chai",
  price: "250",
  isAvailabe: true,
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
  */
