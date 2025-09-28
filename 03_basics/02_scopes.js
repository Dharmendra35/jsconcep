var c = 3;

//socpe is -> {}
if (true) {
  let a = 1;
  const b = 2;
  var c = 5;
}

//console.log(a);//not available
//console.log(b);//not available
console.log(c); //here c will 5, not 3;

/*
let -> scope(local) -> value(re-assingned)
const -> scope(local)-> value(can't re-assigned)
var -> scope(Global) -> value(can re-assigned)
*/

//NOTE : we you are on browser console -> there global scope is different
// when are are on code environment -> running using node, that global scope is different

/*NESTED SCOPES */
function one() {
  const userName = "Dharmendra";
  function two() {
    const website = "google";
    console.log(userName);
  }
  //console.log(website);
  two();
}

one(); //when one() is called , it will call two and userName will print

if (true) {
  const userName = "Dharmedra";
  if (userName == "Dharmedra") {
    const website = " Youtube";
    console.log(userName + website);
  }
  //console.log(website); here website will not available
}
//console.log(userName); //here userName will not available

//+++++++++++++++ INTERESTING CONCEPT ++++++++//
console.log(addOne(2)); //this can be used
function addOne(num) {
  return num + 1;
}

//addTwo(5) //this will give error
const addTwo = function (num) {
  //some time it called as expression
  return num + 2;
};

console.log(addTwo(5));
