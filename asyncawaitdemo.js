//Async Await logic
const movieRating = () => {
  return new Promise((resolve, reject) => {
    let rating = 4.5;
    if (rating > 4) {
      resolve("Good Movie");
    } else {
      resolve("Waste of out time.");
    }
  });
};
// how to call promise with Async/Await
const movieResult = async () => {
  try {
    const result = await movieRating();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
movieResult();
