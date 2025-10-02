function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 5;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

//we can add our on method in prototype
createUser.prototype.increament = function () {
  this.score++; //jisne v bulaya h uske pass jao -> jis ka matlab this
};

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

// const chai = createUser("chai", 25);
// const tea = createUser("tea", 250);
//ab ye prototype jud gya h, lekin bataya nhi ki uske pass ye aditional property aae h

//ab ye chalega
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();
