//array

const myArr = [1, 2, 3, 4];
const myHeros = ["saktiman", "deol"];

const myArr2 = new Array(1, 2, 3, 4, 4, 4);
//console.log(myArr[0]);

myArr.push(2);
myArr.pop();
myArr.unshift(9); //push the elem at first ind and shift all

//console.log(myArr.includes(9)); //give that elem is in the arr or not
//console.log(myArr.indexOf(2));

//slice
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 5, 6, 6];

console.log(arr1.slice(1, 3));
console.log(arr1);
console.log(arr2.splice(1, 3)); //this will remove that range from arr, also including last ind
console.log(arr2);

/*output
[ 2, 3 ]
[ 1, 2, 3, 4, 5 ]
[ 3, 5, 6 ]
[ 2, 6 ]
 */
