const Employee = require("../lib/Employee.js"); //sitting inside a child directory and need to move up

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email", () => {
            //Arrange
            const employee = new Employee ("Paola", "paolaagonzalezm@gmail.com", 1);

            //Assert
            expect("name" in employee).toBe(true);
            expect("id" in employee).toBe(true);
            expect("email" in employee).toBe(true);
            
        });
        it("should give the name of employee via the constructor argument", () => {
            //Arrange
            const employee = new Employee ("Paola", "paolaagonzalezm@gmail.com", 1);
            //Assert
            expect(employee.name).toBe("Paola");
        })
        it("should give the id of employee via the constructor argument", () => {
            //Arrange
            const employee = new Employee ("Paola", "paolaagonzalezm@gmail.com", 1);
            //Assert
            expect(employee.id).toBe(1);
        })
        it("should give the email of employee via the constructor argument", () => {
            //Arrange
            const employee = new Employee ("Paola", "paolaagonzalezm@gmail.com", 1);
            //Assert
            expect(employee.email).toBe("paolaagonzalezm@gmail.com");
        })
        it("should give role of employee via the getRole() method", () => {
            //Arrange
            const employee = new Employee ("Paola", "paolaagonzalezm@gmail.com", 1);
            const role = employee.getRole();
            
            //Assert
            expect(role).toBe("Employee");
        });
    });
});