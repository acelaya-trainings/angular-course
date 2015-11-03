'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'partials/blank.html' });
    $routeProvider.when('/:name', { templateUrl: 'partials/blank.html', controller: PagesController });
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
