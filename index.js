const questions = require ("./utils/questions");
const inquirer = require ('inquirer');
const Employee = require ("./lib/Employee");
const { async } = require("rxjs");
const Manager = require("./lib/Manager");

const htmlCardArray = []


async function main (){
   //Ask manager questions  
    const managerAnswers = await inquirer.prompt(questions.managerQuestions)
    //get only answers values 
    const managerParameters = Object.values(managerAnswers);

      //create new manager based on Obj properties
      const manager = new Manager(...managerParameters)

      //create employee html string
      const employeeCard = generateEmployeeHtml(manager)
    
      //push to htmlCardArray
      htmlCardArray.push(employeeCard)

      //to mainMenu
      mainMenu()

};

    //generate Engineer
      //ask questions
      //create new Engineer based on Obj properties
      //push to htmlCardArray
      //back to mainMenu 
      
    //generate Intern
      //ask questions
      //create new Intern based on Obj properties
      //push to htmlCardArray
      //back to mainMenu  

    //mainMenu func
      //gerenate Engineer
      //generate Intern
      //bye. 
//main menu function
function mainMenu(){
  console.log("main menu")
}
//build htmlString
function generateEmployeeHtml(employee) {
  return `
  <div>
    name: ${employee.name},
    id: ${employee.id},
    email: ${employee.email},
    role: ${employee.getRole()}
</div>
`


};

function buildHtmlString(htmlCardArray) {
  `<!DOCTYPE html>
  <html lang="en" class="h-100">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <link rel="stylesheet" href="assets/styles/style.css" />
      <title>Project01 Boilerplate</title>
      <style></style>
  </head>
  <body class="h-100">
      <nav class="h-25 color-white p-4" style="background:rgba(0, 0, 255, 0.5)">
          <a href="#here"><div class="btn btn-dark rounded-0">Go here!</div></a>
      </nav>
      <main class="container text-center h-50 p-5">

        ${htmlCardArray.join("")}

      </main>
      <footer class="h-25">
          <div class="card bg-dark text -white rounded-0 h-100">
              <div class="card-header">Footer</div>
              <div class="card-body">
                  <div>github: <a href="#github-repo">project repo</a></div>
                  </div>
          </div>  
      </footer>
      <script src="/assets/scriptA.js"></script>
      <script src="/assets/scriptB.js"></script>
  </body>
  </html>
  `




  +htmlCardArray.join
}
//save string to index.html

//Start here
main()
