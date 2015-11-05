'use strict';

// Declare app level module which depends on filters, and services
angular.module('ngproduct', [ 'ngproduct.services', 'ngproduct.controllers' ])
		.config(function($routeProvider) {
			$routeProvider.when('/products', {
				templateUrl : 'partials/products-list.html',
				controller : 'ProductsListCtrl'
			});
			
			$routeProvider.when('/detail/:id', {
				templateUrl : 'partials/detail.html',
				controller : 'DetailCtrl'
			});
			
			$routeProvider.when('/edit/:id', {
				templateUrl : 'partials/detail.html',
				controller : 'EditCtrl'
			});
			
			$routeProvider.when('/create', {
				templateUrl : 'partials/detail.html',
				controller : 'CreateCtrl'
			});
			
			$routeProvider.otherwise({
				redirectTo : '/products'
			});
		});
