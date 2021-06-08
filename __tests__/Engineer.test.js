const Engineer = require("../lib/Engineer");

test("Can set Github via constructor", () =>{
    const testValue = "GithubUser";
    const e = new Engineer("Foo", i, "test@github.com", testValue);
    expect(e.github).toBe(testValue)
});

test("getRole() should return \"Engineer\"", () =>{
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GithubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get Github username via getGitHub()", () =>{
    const testValue = "GithubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
});