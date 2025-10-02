//after ES6
/*
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "dk@33434gmail.com", "2442dfd");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
*/

//behind the schene -> or how we do without classes
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encrytPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "232542@gmail.com", "fwf322");

console.log(tea.encrytPassword());
console.log(tea.changeUsername());
