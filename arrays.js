//arrays in js
//way to create array
let p_names = ["realme", "vivo", "samsung", "LG"]; // literal syntax
let prices = new Array(20000, 30000, 50000, 40000); //object syntax
// to get array values
console.log(p_names[2]);
for (let names of p_names) {
  console.log(names);
}
// using for each method
let names = p_names.forEach((val) => {
  console.log(val);
});
// to add elements
// push method,unshift method,splice method
p_names.push("oneplus");
for (let names of p_names) {
  console.log(names);
}
p_names.unshift("poco");
for (let names of p_names) {
  console.log(names);
}
p_names.splice(2, 0, "Oppo", "moto");
for (let names of p_names) {
  console.log(names);
}
// to remove elements
// popmethod,shift method,splice method,(delete operator)
p_names.pop();
for (let names of p_names) {
  console.log(names);
}
p_names.shift();
for (let names of p_names) {
  console.log(names);
}
p_names.splice(2, 1);
for (let names of p_names) {
  console.log(names);
}
//delete p_names[3];
// for (let names of p_names) {
// }
// portion of an array
// slice method
console.log(p_names.slice(2, 4));
console.log(p_names.slice(-4, -2));
// to search
// index of,last index of,includes,find are the methods
console.log(p_names.indexOf("realme"));
//sort
console.log(p_names.sort());
console.log(p_names.reverse());
// array adavance methods(ES6)
// reduce
let sum = prices.reduce((total, value) => {
  return total + value;
});
console.log(sum);
//map
let offerPrice = prices.map((value) => {
  return value - 5000;
});
console.log(offerPrice);
// to concate
let p_names1 = ["moto", "poco"];
console.log(p_names.concat(p_names1));
// spread operator
let brands = [...p_names, ...p_names1];
console.log(brand);
