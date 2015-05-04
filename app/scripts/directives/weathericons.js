'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:weatherIcons
 * @description
 * # weatherIcons
 */
angular.module('weatherApp')
    .directive('weatherIcon', function () {
        return {
            scope: {
                weatherData: '='
            },
            templateUrl: 'views/weatherIcon.html',
            restrict: 'E',
            replace: true
        };
    });