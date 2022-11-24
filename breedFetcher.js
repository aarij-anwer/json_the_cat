const request = require('request');
let URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

let breed = process.argv[2];

if (breed) {
  URL += breed.toLowerCase();
  request(URL, (error, response, body) => {
    if (!error) {
      // console.log(response.statusCode);
      const data = JSON.parse(body);
      // console.log(data);
      if (data.length > 0) {
        console.log(data[0].description);
      } else {
        console.log("Breed not found!");
      }
    } else {
      console.log(error);
    }
  });
} else {
  console.log("Please enter breed");
}

