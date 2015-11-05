'use strict';

/* Controllers */


var app = angular.module('ngproduct.controllers', []);

app.controller('ProductsListCtrl', function ($scope, ProductsFactory) {
    $scope.products = ProductsFactory.all();
    
    $scope.deleteProduct = function (id) {
    	ProductsFactory.remove(id);
    }
});

app.controller('DetailCtrl', function ($scope, $routeParams, ProductsFactory) {
    $scope.product = ProductsFactory.getById($routeParams.id);
    $scope.detail = true;
});

app.controller('EditCtrl', function ($scope, $routeParams, $location, ProductsFactory) {
    $scope.product = ProductsFactory.getById($routeParams.id);
    $scope.detail = false;
    
    $scope.saveProduct = function () {
    	ProductsFactory.edit($scope.product);
    	$location.path("/products")
    };
});

app.controller('CreateCtrl', function ($scope, $routeParams, $location, ProductsFactory) {
    $scope.detail = false;
    
    $scope.saveProduct = function () {
    	ProductsFactory.create($scope.product);
    	$location.path("/products")
    };
});