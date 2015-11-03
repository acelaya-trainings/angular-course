describe("Una lista de tareas", function() {

    var todoList;

    beforeEach(function() {
        todoList = new TodoList();
    });

    it("debe estar vacía cuando está recién creada", function() {
        expect(todoList.isEmpty()).toBe(true);
    });

    describe("Cuando se añade una tarea", function() {

        beforeEach(function() {
            todoList.addTask("Hacer tutorial para adictosaltrabajo.com");
        });

        it("no debe estar vacía", function() {
            expect(todoList.isEmpty()).toBe(false);
        });

        it("debe poder contener más de una tarea", function() {
            todoList.addTask("Ir a la comida de navidad de Autentia");
            expect(todoList.size()).toBe(2);
        });

        it("debe estar sin completar nada más añadirse a la lista de tareas", function() {
            expect(todoList.task(0).isDone()).toBe(false);
        });

        it("se debe poder completar", function() {
            todoList.task(0).done();
            expect(todoList.task(0).isDone()).toBe(true);
        });

        it("debe quedar vacía al borrar la última tarea", function() {
            todoList.removeTask(0);
            expect(todoList.isEmpty()).toBe(true);
        });
    });
});
