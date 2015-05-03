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
        $scope.weatherData = {};

        $scope.night = function (time, sunrise, sunset) {
            return time < sunrise || time > sunset;
        }

        var init = function () {
            if ($routeParams.city && $routeParams.country) {
                weather.setCityCountry($routeParams.city, $routeParams.country);
            }
            weather.getCurrent().success(function (data) {
                console.log(data);
                $scope.weatherData.current = data;
            });
        }

        init();
    });