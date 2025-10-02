class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USER IS ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@gamil.com", "fsf3r23");

chai.addCourse();
chai.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
