//const promiseOne = new Promise(ek callbaak leta h);
//jisme (resolve, reject) -> resolve direct connect hota h .then() se
//.then(ek function hold karta h)

//promise creation
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("async task is completed");
    resolve();
  });
}, 1000);

//promise consumption
promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async task 2 resolved");
});

//in resolve() -> we can pass arr, obj(in most cases)

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "23254@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//fourth promise
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Dharmendra", password: "244324" });
    } else {
      console.log("error detected");
    }
  }, 1000);
});

// const username = promiseFour.then((user) => {
//   console.log(user);
//   return username;
// }); this will not work

//chaining
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("the promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "2343" });
    } else {
      reject("ERROR : js went wrong");
    }
  }, 1000);
});

//now learn handling/consumption of promise using async await -> instead of .then
//here we can't use .catch -> but useful when db not connected like cases -> no need to proceed further

//more formaly async await cant handle error directly
// async function consumePromiseFive() {
//   const response = await promiseFive;
//   console.log(response);
// }

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("E: ", err);
  }
}

getAllUsers();

//done the above work using .then
fetch("https://api.github.com/users/Dharmendra35/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((er) => {
    console.log(er);
  });
