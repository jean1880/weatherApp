'use strict';

/**
 * @ngdoc overview
 * @name weatherApp
 * @description
 * # weatherApp
 *
 * Main module of the application.
 */
angular
    .module('weatherApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/city/:country/:city/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/cityID/:id', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });