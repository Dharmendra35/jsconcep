// <, > , <= , >= , == , ===, != , !==

//lets learn 'if' statement
let temperature = 41;
if (temperature == "41") {
  console.log(`Today temp is ${temperature}`);
} else {
  console.log(`Temp is greater than 50`);
}

// const score = 200;
// if (score > 100) {
//   var power = "fly";
//   console.log(`Power is ${power}`);
// }

// console.log(`Power is ${power}`);//this will not give error -> as power is var -> so global scope

//++++++++++++++++++++SWITCH STATEMENT++++++++++++++++++++//
/*syntax
switch (key) {
  case value:
    //code
    break;
  default:
    //code
    break;
}
*/

const month = 3;
switch (month) {
  case 1:
    console.log(`month is jan`);
    break;
  case 2:
    console.log(`month is feb`);
    break;
  case 3:
    console.log(`month is march`);
    break;
  default:
    console.log(`case does't matched`);
    break;
}
const mon = "march";
switch (mon) {
  case "jan":
    console.log(`month is jan`);
    break;
  case "feb":
    console.log(`month is feb`);
    break;
  case "march":
    console.log(`month is march`);
    break;
  default:
    console.log(`case does't matched`);
    break;
}
