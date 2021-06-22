const Engineer = require("../lib/Engineer.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, office number", () => {
            //Arrange
            const employee = new Engineer ("Niven", "niven5111@gmail.com", 2, "nivenf");

            //Assert
            expect("name" in employee).toBe(true);
            expect("email" in employee).toBe(true);
            expect("id" in employee).toBe(true);
            expect("github" in employee).toBe(true);
        });
        it("should give the name of employee via the constructor argument", () => {
            //Arrange
            const employee = new Engineer ("Niven", "niven5111@gmail.com", 2, "nivenf");
            //Assert
            expect(employee.name).toBe("Niven");
        });
        it("should give the id of employee via the constructor argument", () => {
            //Arrange
            const employee = new Engineer ("Niven", "niven5111@gmail.com", 2, "nivenf");
            //Assert
            expect(employee.id).toBe(2);
        });
        it("should give the email of employee via the constructor argument", () => {
            //Arrange
            const employee = new Engineer ("Niven", "niven5111@gmail.com", 2, "nivenf");
            //Assert
            expect(employee.email).toBe("niven5111@gmail.com");
        });
        it("should give the github of employee via the constructor argument", () => {
            //Arrange
            const employee = new Engineer ("Niven", "niven5111@gmail.com", 2, "nivenf");
            //Assert
            expect(employee.github).toBe("nivenf");
        });
        it("should give the role of engineer via the getRole() method", () => {
            //Arrange
            const employee = new Engineer ("Niven", "niven5111@gmail.com", 2, "nivenf");
            const role = employee.getRole();
            //Assert
            expect(role).toBe("Engineer");
        });
    });
});