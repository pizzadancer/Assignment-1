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

function gradeQuestion(candidateAnswer, correctAnswer) {
  return (candidateAnswer).toLowerCase() === correctAnswer.toLowerCase(); //questionGrade
}

function gradeQuiz(candidateAnswers) {
  // console.log(candidateAnswers)
  let responsesCorrect = 0;
  for (let i = 0; i < questions.length; i++) {
    if (gradeQuestion(candidateAnswers[i], correctAnswers[i])) {
      responsesCorrect++;
    }
  }
  // console.log(responsesCorrect)
  let grade = (responsesCorrect / questions.length) * 100
  let status;
  if (grade >= 80) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  return [grade, responsesCorrect, questions.length, status];


  // console.log(candidateAnswers[0] === "jace")

  // for (let i = 0; i < questions.length; i++) {
  //   console.log(`${questions[i]}?`);
  //   console.log(` Answer: ${gradeQuestion(candidateAnswers[i], correctAnswers[i])}`)

  // }

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // if (candidateAnswers === "Sally Ride") {
  //   return "That was correct!";
  // } else {
  //   return "That was not right...";
  // }

  // let grade;


  // return grade;
}

function runProgram() {
  // TODO 1.1c: Ask for candidate's name //
  candidateName = askForName();
  correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "45"];
  questions = [
    "1) Who was the first American woman in space? ",
    "2) True or false: 5000 meters = 5 kilometers. ",
    "3) (5 + 3)/2 * 10 = ? ",
    "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
    "5) What is the minimum crew size for the ISS? "
  ]
  candidateAnswers = [];
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(askQuestion(questions[i]));
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }

  // DEBUG CANDIDATE ANSWERS //
  // candidateAnswers = ["sally ride", "True", "3", "trajectory", "45"]


  // console.log(candidateAnswers)

  let quizResults = gradeQuiz(candidateAnswers, correctAnswers);
  console.log(`>>> Overall Grade: ${quizResults[0]}% (${quizResults[1]} of ${quizResults[2]} responses correct) <<<`);
  console.log(`>>> Status: ${quizResults[3]} <<<`)

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