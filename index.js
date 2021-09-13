var readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;

function play(question, answer) {

  console.log(question);
  var userChoice = readlineSync.question("Enter your choice: ");
  
  if(userChoice === answer) {
    console.log(chalk.green("Correct\n"));
    score += 1;
  }else {
    console.log(chalk.red("Wrong. The correct answer is "+ answer + "\n"));
  }
}

console.log("Welcome to " + chalk.italic("How well do you know me Quiz.\n"));

var questions = [{
  question: `What is my birth year?
  a: 1998
  b: 1997
  c: 1999
  d: 2000`,
  answer: "a"
}, {
  question: `What is my favourite color?
  a: red
  b: white
  c: black
  d: blue`,
  answer: "b"
}, {
  question: `What game do I play the most?
  a: Scum
  b: PUBG
  c: Red Dead Redemption
  d: CSGO`,
  answer: "d"
}, {
  question: `What is my favourite fruit?
  a: Guava
  b: Orange
  c: Banana
  d: Apple`,
  answer: "b"
}, {
  question: `Which of the following is my birth place?
  a: Nagpur
  b: Meerut
  c: Jammu
  d: Agra`,
  answer: "c"
}];

for(var i=0; i<questions.length; i++) {
  questionChosen = questions[i];
  play(questionChosen.question,questionChosen.answer);
}

console.log("Your final score is : " + score);