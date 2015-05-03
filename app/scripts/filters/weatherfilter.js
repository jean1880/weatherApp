'use strict';

/**
 * @ngdoc filter
 * @name weatherApp.filter:weatherFilter
 * @function
 * @description
 * # weatherFilter
 * Filter in the weatherApp.
 */
angular.module('weatherApp')
    .filter('weather', function () {
        return function (input) {
            // waether type codes defined from http://openweathermap.org/weather-conditions
            var weatherTypes = {
                    thunderstorms: 200,
                    drizzle: 300,
                    rain: 500,
                    snow: 600,
                    clouds: 800
                },
                type;

            // check which weather idea was passed to filter
            if ((input / weatherTypes.clouds) >= 1) {
                type = 'clouds';
            } else if ((input / weatherTypes.snow) >= 1) {
                type = 'snow';
            } else if ((input / weatherTypes.rain) >= 1) {
                type = 'rain';
            } else if ((input / weatherTypes.drizzle) >= 1) {
                type = 'drizzle';
            } else if ((input / weatherTypes.thunderstorms) >= 1) {
                type = 'thunderstorms';
            } else {
                type = 'error';
            }

            // return simplified weather type
            return type;
        };
    });