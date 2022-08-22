// parent class: name, id, email, getName(),getId(), getEmail(),getRole() returns employee. Consider adding validation to ensure euser input is provided in proper expectations. 
const Employee = require("../lib/employee");

describe("Employee", () => {
    it("creates a new Employee", () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe("object");
    });
});

    it("can set name", () => {
        const name = "Tom";
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    });

    it("Can set ID", () => {
        const value = 50;
        const emp = new Employee("Todd", value);
        expect(emp.id).toBe(value);
    });

    it("can set email", () => {
        const email = "test@test.com";
        const emp = new Employee("Josh", 34, email);
        expect(emp.email).toBe(email);
    });

describe("getName", () => {
    it("get name via getName()", () => {
        const name = "Tom";
        const emp = new Employee(name);
        expect(emp.getName()).toBe(name);
    });
});

describe("getId", () => {
    it("can get id via getID()", () => {
        const id = 13;
        const emp = new Employee("Todd", id);
        expect(emp.getId()).toBe(id);
    });
});

describe("getEmail", () => {
    it("can get email via getEmail()", () => {
        const email = "test@test.com";
        const emp = new Employee("Josh", 34, email);
        expect(emp.getEmail()).toBe(email);
    });
});
describe("getRole", () => {
    it("can get role via getRole()", () => {
        const role = "Employee";
        const emp = new Employee("Todd", 13, "test@test.com");
        expect(emp.getRole()).toBe(role);
    });
});

