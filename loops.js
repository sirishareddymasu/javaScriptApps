// loops in javascript
//for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// While loop
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}
// do while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 10);
//New loops in ES6
// "for in" is one loop and "for of" is another loop
// this loops are used to retrive  data from iterables
//iterables are nothing but arrays,strings,objects
let pnames = ["1g", "samsung", "vivo", "realme"];
for (let names of pnames) {
  console.log(names);
}
for (let names in pnames) {
  console.log(pnames[names]);
}
let empinfo = {
  eid: 1001,
  ename: "siri",
  esalary: 20000,
};
for (let info in empinfo) {
  console.log(empinfo[info]);
}
// How to retrive from string
let collegename = "vignan";
for (let name in collegename) {
  console.log(collegename[name]);
}
for (let name of collegename) {
  console.log(name);
}
