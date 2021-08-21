const input = require('readline-sync');
const chalk = require('chalk');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  return input.question("What is your name? ");
}

function askQuestion(question) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  return input.question(question);
}

function gradeQuiz(candidateAnswers) {
  // console.log(candidateAnswers)
  console.log(chalk.cyan.underline("Quiz Results\n"));

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if (candidateAnswers === "Sally Ride") {
    return "That was correct!";
  } else {
    return "That was not right...";
  }

  let grade;


  return grade;
}

function runProgram() {
  // TODO 1.1c: Ask for candidate's name //
  candidateName = askForName();
  questions = [
    "Who was the first American woman in space? ",
    "True or false: 5000 meters = 5 kilometers.",
    "(5 + 3)/2 * 10 = ?",
    "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
    "What is the minimum crew size for the ISS?"
  ]
  candidateAnswers = [];
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(askQuestion(questions[i]));
  }
  // console.log(candidateAnswers)

  gradeQuiz(this.candidateAnswers);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};