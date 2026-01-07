// with out closure
let counter = 1;
const counterResult = () => {
  let counter = 0; //local variable
  counter += 1;
  return counter;
};
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());
