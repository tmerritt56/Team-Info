// this extends from employee, officenumber getRole(), overriden to return Manager. 
const Manager = require("../lib/manager");

test("get Office number", () => {
    const offnumber = "officenumber";
    const manager = new Manager ("Josh", 3, "test@test.com", "officenumber");
    expect(manager.offnumber).toBe(offnumber);
});

test("getRole() should return Manager", () => {
    const role = "Manager";
    const manager = new Manager ("Josh", 3, "test@test.com", "offnumber");
    expect (manager.getRole()).toBe(role);
});

test("get officenumber via getOffNumber()", () => {
    const offnumber = "500";
    const manager = new Manager("Josh", 3, "test@test.com", offnumber);
    expect(manager.getOffNumber()).toBe(offnumber);
});