// With closure
const counterResult = (() => {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})(); // self Invoking
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());
