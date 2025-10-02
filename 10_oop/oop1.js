const user = {
  username: "Dharmendra",
  longinCnt: 6,
  signedIn: true,
  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.getUserDetails());
console.log(this);

function User(username, loginCnt, isLogedIn) {
  this.username = username;
  this.loginCnt = loginCnt;
  this.isLogedIn = isLogedIn;

  console.log(this);
}
//new -> likhte hi nya object milta hai

const user1 = new User("hitesh", 12, true);

console.log(user1);
console.log(user1.Constructor);
