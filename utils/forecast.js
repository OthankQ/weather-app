const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/252cc69935361a0955f275382d55d8b5/${lat},${long}?units=si&lang=ja`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (response.body.error) {
      callback('Unable to find the location.', undefined);
    } else {
      callback(undefined, response.body.daily.summary);
    }
  });
};

module.exports = forecast;
