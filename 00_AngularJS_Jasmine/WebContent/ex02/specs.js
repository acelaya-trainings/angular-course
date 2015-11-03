describe("myApp", function() {
 
    beforeEach(module('myApp'));
 
    describe("SimpleController", function() {
 
        var scope;
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller("SimpleController", {
                $scope: scope
            });
        }));
 
        it("should double the numbers x", function() {
            scope.doubleIt();
            expect(scope.x).toBe(6);
        });
        
        it("should double the numbers y", function() {
            scope.doubleIt();
            expect(scope.y).toBe(8);
        });
    });
});