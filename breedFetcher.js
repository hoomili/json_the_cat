const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = (breed, callback) => {
  if (!breed) {
    callback(`Error please enter a breed!`, null);
    return;
  }
  const urlSearch = `${url}?q=${breed}`;
  request(urlSearch, (error, response, body) => {
    console.log('statusCode:', response && response.statusCode);

    if (body === '[]') {
      callback(`Error ${breed} not found!`, null);
      return;
    }
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data[0].description);


  });
};
module.exports = { fetchBreedDescription };