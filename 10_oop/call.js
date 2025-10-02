function SetUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  //SetUsername(username);not work
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "234234");
console.log(chai);
