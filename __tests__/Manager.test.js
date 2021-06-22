const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, office number", () => {
            //Arrange
            const employee = new Manager ("Rodney", 1, "rodneysara@yahoo.com", 202);

            //Assert
            expect("name" in employee).toBe(true);
            expect("email" in employee).toBe(true);
            expect("id" in employee).toBe(true);
            expect("officeNumber" in employee).toBe(true);
        });
        it("should give the name of employee via the constructor argument", () => {
            //Arrange
            const employee = new Manager ("Rodney", "rodneysara@yahoo.com", 1, 202);
            //Assert
            expect(employee.name).toBe("Rodney");
        });
        it("should give the id of employee via the constructor argument", () => {
            //Arrange
            const employee = new Manager ("Rodney", "rodneysara@yahoo.com", 1, 202);
            //Assert
            expect(employee.id).toBe(1);
        });
        it("should give the email of employee via the constructor argument", () => {
            //Arrange
            const employee = new Manager ("Rodney", "rodneysara@yahoo.com", 1, 202);
            //Assert
            expect(employee.email).toBe("rodneysara@yahoo.com");
        });
        it("should give the office number of employee via the constructor argument", () => {
            //Arrange
            const employee = new Manager ("Rodney", "rodneysara@yahoo.com", 1, 202);
            //Assert
            expect(employee.officeNumber).toBe(202);
        });
    });
});