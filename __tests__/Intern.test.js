const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, office number", () => {
            //Arrange
            const employee = new Intern ("John", "email@email.com", 3, "UArizona");

            //Assert
            expect("name" in employee).toBe(true);
            expect("email" in employee).toBe(true);
            expect("id" in employee).toBe(true);
            expect("school" in employee).toBe(true);
        });
        it("should give the name of employee via the constructor argument", () => {
            //Arrange
            const employee = new Intern ("John", "email@email.com", 3, "UArizona");
            //Assert
            expect(employee.name).toBe("John");
        });
        it("should give the email of employee via the constructor argument", () => {
            //Arrange
            const employee = new Intern ("John", "email@email.com", 3, "UArizona");
            //Assert
            expect(employee.email).toBe("email@email.com");
        });
        it("should give the id of employee via the constructor argument", () => {
            //Arrange
            const employee = new Intern ("John", "email@email.com", 3, "UArizona");
            //Assert
            expect(employee.id).toBe(3);
        });
        it("should give the github of employee via the constructor argument", () => {
            //Arrange
            const employee = new Intern ("John", "email@email.com", 3, "UArizona");
            //Assert
            expect(employee.school).toBe("UArizona");
        });
        it("should give the role of intern via the getRole() method", () => {
            //Arrange
            const employee = new Intern ("John", "email@email.com", 3, "UArizona");
            const role = employee.getRole();
            //Assert
            expect(role).toBe("Intern");
        });
    });
});