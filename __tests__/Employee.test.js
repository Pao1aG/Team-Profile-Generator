const Employee = require("../lib/Employee.js"); //sitting inside a child directory and need to move up

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and role", () => {
            //Arrange
            const employee = new Employee ("Paola", 1, "paolaagonzalezm@gmail.com")
            
            // //Act?
            // const role = employee.getRole()

            //Assert
            expect("name" in employee).toBe(true);
            expect("email" in employee).toBe(true);
            expect("id" in employee).toBe(true);
        });
    });
});