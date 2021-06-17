module.exports = {
  managerQuestions: [
    {
      message: "What is your name?",
      name: "name"
    },

    {
      message: "What is your id?",
      name: "id"
    },

    {
      message: "What is your email?",
      name: "email",
    },

    {
      message: "What is your office number?",
      name: "office",
    }
  ],

  engineerQuestions: [
    {
      message: "What is your name?",
      name: "name"
    },
    {
      message: "What is your id?",
      name: "id"
    },
    {
      message: "What is your email?",
      name: "email",
    },
    {
      message: "What is your Github username?",
      name: "github",
    }
  ],

  internQuestions: [
    {
      message: "What is your name?",
      name: "name"
    },
    {
      message: "What is your id?",
      name: "id"
    },
    {
      message: "What is your email?",
      name: "email",
    },
    {
      message: "What is the name of your school?",
      name: "school",
    }
  ],
  
  mainMenuQuestions: [
    {
      message: "What would you like to do next?",
      name: "mainMenu", 
      type: "list", 
      choices: [
        "Add another Engineer", 
        "Add an Intern", 
        "Bye"
      ]
    },
  ]

}