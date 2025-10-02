class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  logMe() {
    console.log(`user is ${this.username}`);
  }

  static generateUniqId() {
    console.log(`2324`);
  }
}

const chai = new User("chai", "chai@gmail.com", "df3r32");
chai.logMe();
//chai.generateUniqId();

//so we can see that static member are not accesible for that class obj as well as child class objects
