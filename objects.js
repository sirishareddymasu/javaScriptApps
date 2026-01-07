// objects in js
const movieInfo = {
  title: "Akhanda2",
  hero: "Balayya",
  director: "Boyapati",
};
// how to get director name
console.log(movieInfo.director);
console.log(movieInfo["hero"]);
// for in
for (let info in movieInfo) {
  console.log(movieInfo[info]);
}
// Advanced methods
//object.keys
Object.keys(movieInfo).forEach((key) => {
  console.log(key);
});
// object.values
Object.values(movieInfo).forEach((values) => {
  console.log(values);
});
// object.entries
Object.entries(movieInfo).forEach((entry) => {
  console.log(entry[0] + " " + entry[1]);
});
for (let [info, infoval] of Object.entries(movieInfo)) {
  console.log(info + " " + infoval);
}
// nested object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);
// cart object
const cartItems={}
    products:[
        {pid:1001,pname:"drone",price:1500},
        {pid:1002,pname:"AC",price:30000},
    ],
    
shippingAddress:
        {street:"Gandhi nagar",Area:"Guntur",pincode:522311},
    userInfo:{name:"Sumi",id:103},
    
    };
    console.log(cartItems.userInfo.name);