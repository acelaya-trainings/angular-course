'use strict';

describe("Tareas a aprender", function() {
  var $scope;
  var todoCtrl;


  beforeEach( function() {
        // do nothing in this example
  });


  it('initial item number should be 2', inject(function($rootScope, $controller) {
        var scope = $rootScope.$new();
        var ctrl = $controller('TodoCtrl', {$scope: scope});
        expect(scope.todos.length).toEqual(2);
   }));

  it('adding a item should increase the total numbers to 3', inject(function($rootScope, $controller) {
        var scope = $rootScope.$new();
        var ctrl = $controller('TodoCtrl', {$scope: scope});
        scope.addTodo();
        expect(scope.todos.length).toEqual(3);
  }));

});