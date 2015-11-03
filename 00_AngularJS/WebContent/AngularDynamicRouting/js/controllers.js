'use strict';

/* Controllers */
function PagesController($scope, $http, $route, $routeParams, $compile) {
    $route.current.templateUrl = 'partials/' + $routeParams.name + ".html";
    
    $http.get($route.current.templateUrl).then(function (msg) {
        $('#views').html($compile(msg.data)($scope));
    });
}
PagesController.$inject = ['$scope', '$http', '$route', '$routeParams', '$compile'];

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
