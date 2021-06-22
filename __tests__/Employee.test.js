const Employee = require("../lib/Employee.js"); //sitting inside a child directory and need to move up

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email", () => {
            //Arrange
            const employee = new Employee ("Paola", 1, "paolaagonzalezm@gmail.com");
            //Assert
            expect("name" in employee).toBe(true);
            expect("email" in employee).toBe(true);
            expect("id" in employee).toBe(true);
        });
        it("should give the name of employee via the constructor argument", () => {
            //Arrange
            const employee = new Employee ("Paola", 1, "paolaagonzalezm@gmail.com");
            //Assert
            expect(employee.name).toBe("Paola");
        })
        it("should give the id of employee via the constructor argument", () => {
            //Arrange
            const employee = new Employee ("Paola", 1, "paolaagonzalezm@gmail.com");
            //Assert
            expect(employee.id).toBe(1);
        })
        it("should give the email of employee via the constructor argument", () => {
            //Arrange
            const employee = new Employee ("Paola", 1, "paolaagonzalezm@gmail.com");
            //Assert
            expect(employee.email).toBe("paolaagonzalezm@gmail.com");
        })
    });
});