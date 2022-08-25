// extends employee: school, getSchool(), getRole(), overridden to return intern. 
const Intern = require("../lib/intern");

test("get school", () => {
    const school = "School";
    const intern = new Intern ("Tom", 2, "testy@test.com", "School");
    expect(intern.school).toBe(school);
});

test("getRole() should return Intern", () =>{
    const role = "Intern";
    const intern = new Intern ("Tom", 2, "testy@test.com", "School");
    expect (intern.getRole()).toBe(role);
} );

test("get School via getSchool()", () => {
    const school = "Vanderbilt";
    const intern = new Intern("Tom", 2, "testy@test.com", school);
    expect(intern.getSchool()).toBe(school);
})