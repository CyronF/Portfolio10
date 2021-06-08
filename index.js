const questions = require ("./utils/questions");
const inquirer = require ('inquirer');
const Employee = require ("./lib/Employee");
const { async } = require("rxjs");

async function main (){
    const manager = await inquirer.prompt(questions)

    //(new Employee(...Object.values(manager)))

    //create a manager 
    //ask
    //generate html string from answers/push to complete team
    //ask for 
      //switch
        //intern
        //emgineer
        //done
    //

}

//start
main()


