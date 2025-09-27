let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber);

//comparision
/*
1.console.log(null > 0); // false
Comparison (>) converts null to a number before comparing.

null is converted to 0.

0 > 0 is false.

2. console.log(null == 0); // false
The equality check (==) does not convert null to a number.

null is only equal to undefined in loose equality (==), not to numbers.

So, null == 0 is false.

3. console.log(null >= 0); // true
The >= comparison also converts null to a number (0).

It becomes 0 >= 0, which is true.
*/

//summary//
/*
* Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                               string
iii)           Boolean                               boolean
iv)           Bigint                                 bigint
v)            Symbol                                symbol
vi)           Null                                  object
vii)          Undefined                             undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)

*/

//memory management

//premititve Type -> stack Memory
let myName = "Dharmendra";
let anotherName = "DK";

anotherName = myName;
console.log(myName);
console.log(anotherName);

//notPremitive -> Heap memory
let userOne = {
  email: "dk23454@gmail.com",
  cont: 23455533533,
};

let userTwo = userOne;
userTwo.email = "allu";

//summary
/*
Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.
*/
