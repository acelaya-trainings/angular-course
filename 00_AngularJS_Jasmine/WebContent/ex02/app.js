var app = angular.module('myApp', []);

var SimpleController = function ($scope) {
    
    $scope.x = 3;
    $scope.y = 4;
    $scope.doubleIt = function () {
        $scope.x *= 2;
        $scope.y *= 2;
    };
};
 
app.controller("SimpleController", 
         ["$scope", SimpleController]);