//promiseschaining in Js
const ticketBooking = () => {
  return new Promise((resolve, reject) => {
    resolve("ticket booked");
  });
};
const popcorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Buy popcorn");
  });
};
const coke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Buy coke");
  });
};
ticketBooking()
  .then((result) => {
    return popcorn(result);
  })
  .then((result) => {
    return coke(result);
  })
  .then((result) => {
    console.log("wanna go to movie" + result);
  })
  .catch((error) => {
    console.log(error);
  });
