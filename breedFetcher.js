const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search';
const breed = process.argv[2];
const urlSearch = `${url}?q=${breed}`;


request(urlSearch, (error, response, body) => {
  if (error) {
    console.log('error! Request Failed:', error);
    return;
  }
  console.log('statusCode:', response && response.statusCode);

  if (body === '[]') {
    console.log(`Error ${breed} not found!`);
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);


});