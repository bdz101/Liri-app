if (process.argv[2] === "movie-this") {
  var request = require("request");


  var movieName = process.argv[3];
  for (i = 4; i < process.argv.length; i++) {
    movieName += "+" + process.argv[i];
  }


  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&r=json";



  console.log(queryUrl);


  request(queryUrl, function (error, response, body) {


    if (!error && response.statusCode === 200) {


      console.log("Title: " + JSON.parse(body).Title);
      console.log("Released: " + JSON.parse(body).Year);
      console.log("Rating: " + JSON.parse(body).imdbRating);
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
      console.log("Rotten Tomatoes: " + JSON.parse(body).tomatoURL);
    }
  });
}