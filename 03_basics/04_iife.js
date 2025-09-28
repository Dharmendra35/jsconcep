//IIFE -> immediately invoked funtion expressions
//used to avoid the pollution due global scope of variables
//syntax -> ()()
//(funtion defination)(execution call)

(function chai() {
  //named IIFE -> name is chai
  console.log(`DB Connected`);
})(); //here semicolon required -> to know where code has to end

//IIFI as an arrow function
(() => {
  console.log(`DB IS CONNECTED`);
})();

//if we want to pass a argument in IIFE
((name) => {
  console.log(`DB IS CONNECTED TO ${name}`);
})("Dharmendra");
