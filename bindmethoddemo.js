// Bind method
const MovieInfo = {
  movieDetails: function () {
    return this.heroName + " " + " " + this.vilanName;
  },
};
const pushpa = {
  heroName: "AlluArjun",
  vilanName: "fahad fassil",
};
let res = movieInfo;
console.log(MovieInfo.movieDetails.bind(pushpa));
