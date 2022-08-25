// extending employee: github,getGithub(), getRole() overridden to return engineer.
const Engineer = require("../lib/engineer");

test("get GITHUB User", () => {
    const User = "GithubUser";
    const eng = new Engineer ("Todd", 1, "test@test.com", User);
    expect(eng.github).toBe(User);
});

test("getRole() should return Eng", () => {
    const role = "Engineer";
    const eng = new Engineer ("Todd", 1, "test@test.com", "GitHubUser");
    expect(eng.getRole()).toBe(role);
});

test("Get GitHub user via getGithub()", ()=> {
    const user = "GitHubUser";
    const eng = new Engineer("Todd", 1, "test@test.com", user);
    expect(eng.getGithub()).toBe(user);
});