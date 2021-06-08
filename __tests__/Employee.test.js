const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", ()=> {
    const e = new Employee();
    expect(e instanceof Employee).toBe(true)
});

test("Can set name via constructor arguments", () => {
    const name = "Cyron";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor arguments", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor arguments", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});
