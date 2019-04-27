const geocode = require('./utils/geocode');

// const url =
//   'https://api.darksky.net/forecast/252cc69935361a0955f275382d55d8b5/35.9086113,139.4852753?units=si&lang=ja';

// request({ url: url, json: true }, (error, response) => {
//   const dailyData = response.body.daily.data;
//   const currentData = response.body.currently;
//   const currentTemp = currentData.temperature;
//   const chanceOfRain = currentData.precipProbability;
//   if (error) {
//     console.log('Oops! There was an error!');
//   } else if (response.body.error) {
//     console.log('Unable to find location!');
//   } else {
//     console.log(
//       `${
//         dailyData[0].summary
//       } It is currently ${currentTemp} degrees out. There is ${chanceOfRain}% chance of rain.`
//     );
//   }
// });

// const geocodeURL =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Kawagoe.json?access_token=pk.eyJ1IjoibW9yaW9rYSIsImEiOiJjanV1ZzJtazMwaWJ0NDRxcW1kaTl5dml6In0.DnUrKy-PlyvI48bneDpn3g&limit=1&language=ja';

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Oops! There was an error!');
//   } else if (response.body.features.length === 0) {
//     console.log('There was no matching results!');
//   } else {
//     const coord = response.body.features[0].center;
//     const lat = coord[1];
//     const long = coord[0];
//     console.log(lat, long);
//   }
// });

geocode('Tokyo', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
