const request = require('request');
let URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

// let breed = process.argv[2];

// if (breed) {
//   URL += breed.toLowerCase();
//   request(URL, (error, response, body) => {
//     if (!error) {
//       const data = JSON.parse(body);
//       if (data.length > 0) {
//         console.log(data[0].description);
//       } else {
//         console.log("Breed not found!");
//       }
//     } else {
//       console.log(error);
//     }
//   });
// } else {
//   console.log("Please enter breed");
// }

const fetchBreedDescription = function(breedName, callback) {
  URL += breedName;
  request(URL, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callback(null,data[0].description);
      } else {
        callback(null,"Breed not found!");
      }
    } else {
      callback(error,null);
    }
  });
};

module.exports = { fetchBreedDescription };
