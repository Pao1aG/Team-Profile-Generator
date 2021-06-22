const Engineer = require("../lib/Engineer.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, office number", () => {
            //Arrange
            const employee = new Engineer ("Niven", 2, "niven5111@gmail.com", "nivenf");

            //Assert
            expect("name" in employee).toBe(true);
            expect("email" in employee).toBe(true);
            expect("id" in employee).toBe(true);
            expect("github" in employee).toBe(true);
        });
        it("should give the name of employee via the constructor argument", () => {
            //Arrange
            const employee = new Engineer ("Niven", 2, "niven5111@gmail.com", "nivenf");
            //Assert
            expect(employee.name).toBe("Niven");
        })
        it("should give the id of employee via the constructor argument", () => {
            //Arrange
            const employee = new Engineer ("Niven", 2, "niven5111@gmail.com", "nivenf");
            //Assert
            expect(employee.id).toBe(2);
        })
        it("should give the email of employee via the constructor argument", () => {
            //Arrange
            const employee = new Engineer ("Niven", 2, "niven5111@gmail.com", "nivenf");
            //Assert
            expect(employee.email).toBe("niven5111@gmail.com");
        })
        it("should give the role of employee via the constructor argument and getRole() method", () => {
            //Arrange
            const employee = new Engineer ("Niven", 2, "niven5111@gmail.com", "nivenf");
            //Assert
            expect(employee.github).toBe("nivenf");
        })
    });
});