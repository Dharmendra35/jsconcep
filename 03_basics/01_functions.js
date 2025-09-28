function myName() {
  console.log("D");
  console.log("H");
  console.log("A");
  console.log("R");
  console.log("M");
  console.log("E");
  console.log("N");
  console.log("D");
  console.log("R");
}

//myName => it is reference
//myName() -> it is execution
//myName();

/*
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
addTwoNumbers(2, 4);
*/

function addTwoNumbers(number1, number2) {
  //here called parameters
  return number1 + number2;
}

const result = addTwoNumbers(2, 4); //here called arguments

function loginUserMessage(userName) {
  //we can give here default val using -> userName = "Sam" , like this
  if (userName === undefined) {
    console.log("please enter userName");
    return;
  }
  return `${userName} is logged in`;
}

//console.log(loginUserMessage("Dharmendra"));

//if we want to take unlimited arguments
function calculateCartPrice(...cost) {
  //here .. is rest operator
  return cost;
}

function calculatePrice(cost1, cost3, ...cost) {
  return cost;
}

//console.log(calculateCartPrice(23, 42, 43)); //[23, 42, 43]
//console.log(calculatePrice(12, 13, 45, 56)); //[45, 56]

//we can pass objects as arguments
const user = {
  name: "Dharmendra",
  price: 199,
};

function handleObject(anyObject) {
  console.log(`userName is ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject(user);
//no need to make separate object, then pass into function
//we can also direct pass object into function
handleObject({
  name: "akko",
  price: 665,
});

//now pass a array into function as arguments
function returnSecondVal(anyArray) {
  return anyArray[1];
}

const newArr = [2, 4, 5, 5];
console.log(returnSecondVal(newArr));
console.log(returnSecondVal([3, 5, 6]));
