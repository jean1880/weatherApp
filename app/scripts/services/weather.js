'use strict';

/**
 * @ngdoc service
 * @name weatherApp.weather
 * @description
 * # weather
 * Factory in the weatherApp.
 */
angular.module('weatherApp')
    .factory('weather', function ($http) {
        'use strict';
        var APIKey = 'APPID=1924ab45bd82bb7469c86139df8dbfce',
            serverAddress = 'http://api.openweathermap.org/data/2.5/',
            weatherCodes, city, country, cityID, coords;

        $http.get('../data/weathercodes.json').success(function (data) {
            weatherCodes = data;
        });

        return {
            setCityCountry: function (city, country) {
                this.city = city;
                this.country = country;
            },
            getCurrent: function () {
                return $http.get(serverAddress + 'weather?' + 'q=' + this.city + ',' + this.country + '&' + APIKey);
            },
            getWeatherCodes: function () {
                return this.weatherCodes
            }
        };
    });