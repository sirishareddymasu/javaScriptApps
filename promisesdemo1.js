const bubbleGame = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10) + 1;
  if (number >= 5) {
    resolve("High score");
  } else {
    reject("Low score");
  }
});
bubbleGame
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
