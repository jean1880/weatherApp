'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherApp
 */
angular.module('weatherApp')
    .controller('MainCtrl', function ($scope, weather, $routeParams) {
        $scope.weatherData = {
            current: {},
            forecast: []
        };

        $scope.night = function (time, sunrise, sunset) {
            return time < sunrise || time > sunset;
        }

        var init = function () {
            if ($routeParams.city && $routeParams.country) {
                weather.setCityCountry($routeParams.city, $routeParams.country);
            } else if ($routeParams.id) {
                weather.setCityCode($routeParams.id);
            }
            weather.getCurrent().success(function (data) {
                console.log(data);
                $scope.weatherData.current = data;
            });
            weather.getForecast().success(function (data) {
                $scope.weatherData.forecast = data.list;
                /*var forecastDays = 5,
                    forecastInterval = 8,
                    x, y;
                for (x = 0; x < forecastDays; x++) {
                    $scope.weatherData.forecast[x] = [];
                    for (y = 0; y < forecastInterval; y++) {
                        $scope.weatherData.forecast[x].push(data.list[x * y]);
                    }
                }*/
                console.log($scope.weatherData.forecast);
            });
        }

        init();
    });