const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//falsy value
//false, 0, -1, BigInt 0n, "", null, undefined, NaN

//truthy value -> except above falsy val , all are truthy
//but here are some truthy, which can surprise us
// "0", "false", " ", [], {}, function(){}

//how to check a array is empty or not
if (userEmail.length == 0) {
  console.log("array is empty");
}

//how to check an object is empty or not
const emptyObj = {};
if (emptyObj.key(emptyObj).length == 0) {
  console.log("object is empty");
}

/*NOTE
flase == 0 => true
false == '' -> true
0 == '' -> true
*/

//Nullish coalescing operator(??) -> it assigned the first valid value

// let val1;
// val1 = 5 ?? 10; -> 5 will assign as 5 is valid
// val1 = null ?? 10; -> 10 will assign , as null is not valid
// val1 = undefined ?? 15; -> 15 will assign
// val1 = null ?? 10 ?? 15; -> 10

//Terniary operator -> it is different form above

//synatx ->  (condition) ? true : false;
const val = 100;
val >= 80
  ? console.log("val is greater than 80")
  : console.log("val is not greater than 80");
