'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myAppCtrl',
  'myAppServices',
  'myAppDirect',
  'ngCookies'

]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
     when('/homepage',{
      controller:'Ctrl1',
      templateUrl: 'views/homepage.html'
     }).
      otherwise({
        redirectTo: '/homepage'
      });
  }]);