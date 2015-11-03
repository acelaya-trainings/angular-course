'use strict';

// Declare app level module which depends on filters, and services
angular.module('ngdemo', ['ngdemo.services', 'ngdemo.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
