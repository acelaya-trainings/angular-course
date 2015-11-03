describe("Operaciones Aritmeticas", function() {

    describe("Con la operacion de suma", function() {
    	
        it("Cuando sumo dos numeros positivos obtengo un numero positivo", function() {
            expect(suma(2,3)).toBe(5);
        });
        
        it("Cuando sumo un numero y cero obtengo el mismo numero", function() {
            expect(suma(3,0)).toBe(suma(0,3));
            expect(suma(0,3)).toBe(3);
        });

    });
    
    describe("Con la operacion de resta", function() {
    	
        it("Obtener numero negativo con resta", function() {
            expect(resta(3,7)).toBe(-4);
        });
        
        it("Obtengo el mismo numero si resto 0", function() {
        	var a=7;
            expect(resta(a,0)).toBe(a);
        });

    });
});
