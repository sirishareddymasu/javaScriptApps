// multi lines strings
//back tick
let desc = `vignan's Lara Institute if Technology & Science (VLITS) is a private engineering college in vadlamudi,guntur,Andhra pradesh,established in 2007`;
console.log(desc);
// string interpolation
let firstname = "sirisha";
let lastname = "reddymasu";
console.log(`${firstname} ${lastname}`);
// array destructing
let pnames = ["realme", "LG", "vivo"];
let [brand1, brand2, brand3] = pnames;
console.log(brand1);
console.log(brand2);
console.log(brand3);
// object destructing
const movieInfo = {
  moviename: "Bahubali",
  director: "rajmouli",
  producer: "shobu",
};
let { moviename, director, producer } = movieInfo;
console.log(moviename);
console.log(director);
console.log(producer);
