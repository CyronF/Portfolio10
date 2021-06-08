const Employee = require("../lib/Employee");

const Intern = require("../lib/Employee");

class Intern extends Employee {
    constructor(id, name, email, github) {

        super(id, name, email);
        this.github = github;
    }

    getRole() {return 'Intern'}

}

module.exports = Intern;