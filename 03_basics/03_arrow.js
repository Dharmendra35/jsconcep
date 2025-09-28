const user = {
  userName: "Dharmendra",
  price: "999",
  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to website`);
    //console.log(this); it give the whole object in this scope
  },
};

// user.welcomeMessage();
// user.userName = "sam";
// user.welcomeMessage();

/*console.log(this);  // here it give empty -> {}
but if we check it in browser console , it gives -> window object
*/

/*
function chai() {
  let userName = "Dharmendra";
  console.log(this); //-> it will give huge data
  //console.log(this.userName); it will not work , gives undefined
}
*/

const chai = () => {
  let userName = "Dharmendra";
  console.log(this); // it will give {}
};
//In Node.js, this at the top level refers to an empty object {} (not window, because Node doesn’t have a browser environment).

//chai();

/*
In Node.js, this refers to an empty object {} (not window, because Node doesn’t have a browser environment).

In non-strict mode → this is the global object (window in browser, global in Node).
In strict mode → this is undefined.
*/

//+++++++++++++++++++ARROW FUNCTION++++++++++++++++++//
const add1 = (nums1, nums2) => {
  return num1 + nums2; //explicit return
};

//implicit return -> no need to write return keyword to return
const add2 = (nums1, nums2) => nums1 + nums2;
const add3 = (nums1, nums2) => nums1 + nums2;

// if we want to return object
const add = (num1, num2) => ({ userName: "Dharmendra" });

const myarr = [2, 4, 5];
//myarr.forEach((element) => {});
//myarr.forEach(() => ());
