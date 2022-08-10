const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual a primeira nota?",
    },
    {
      name: "p2",
      message: "Qual a segunda nota?",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const media = (Number(answers.p1) + Number(answers.p2)) / 2;

    console.log(chalk.green.bold(`A média é: ${media}`));
  })
  .catch((err) => console.log(err));
