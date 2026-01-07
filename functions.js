//functions in js
function showMessage() {
  console.log("hi");
}
showMessage();
//function with parameters[a,b are parameters][10,20 are arguements]
function sumofNumbers(a, b) {
  console.log(a + b);
}
sumofNumbers(10, 20);
// return a value from function
function mulofNumbers(a, b) {
  return a * b;
}
let x = mulofNumbers(10, 20);
console.log(x);
// ES6 new functions(arrow function)

const arrowDemo = () => {
  console.log("arrow function demo");
};
arrowDemo();
// arrow function with parameters
const addNumbers = (num1, num2) => {
  console.log(num1 + num2);
};
// addNumbers(20, 30);
// //arrow function  in simple way
// const addNUms1 = (num1, num2) => num1 + num2;
// let ans = addNums1(10, 20);
// console.log(ans);
// rest parameter
const printNumbers = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(...c);
};
printNumbers(10, 20, 30, 40, 50);
// default parameters
const sumNumbers = (a, b = 20) => {
  console.log(a + b);
};
sumNumbers(10, 40);
