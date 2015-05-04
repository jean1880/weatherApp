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
            city, country, cityID, coords;

        return {
            setCityCountry: function (city, country) {
                this.city = city;
                this.country = country;
            },
            setCityCode: function (id) {
                this.cityID = id;
            },
            getCurrent: function () {
                var query = '&' + APIKey;
                if (this.city && this.country) {
                    query = 'q=' + this.city + ',' + this.country + query;
                } else if (this.cityID) {
                    query = 'id=' + this.cityID + query;
                }
                return $http.get(serverAddress + 'weather?' + query);
            },
            getForecast: function () {
                var query = '&' + APIKey;
                if (this.city && this.country) {
                    query = 'q=' + this.city + ',' + this.country + query;
                } else if (this.cityID) {
                    query = 'id=' + this.cityID + query;
                }
                return $http.get(serverAddress + 'forecast/daily?cnt=5&' + query);
            }
        };
    });