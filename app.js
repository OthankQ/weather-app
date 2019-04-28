const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your location: ', location => {
  geocode(location, (error, data) => {
    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
});
