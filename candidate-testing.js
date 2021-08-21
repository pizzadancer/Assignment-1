const input = require('readline-sync');
const chalk = require('chalk');

let candidateName = "";
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  return input.question("What is your name? ");
}

function askQuestion(question) {
  return input.question(question);
}

/*
  gradeQuestion : Checks for equivalency between the submitted candidate answer & the correctAnswer
    returns: true OR false
*/
function gradeQuestion(candidateAnswer, correctAnswer) {
  return (candidateAnswer).toLowerCase() === correctAnswer.toLowerCase(); //questionGrade
}

/*
  gradeQuiz: Checks the amount of questions user answered correctly
             Finds the percentage grade
             Gets the Status
    returns an array of the grade, responsesCorrect, amtOfQuestions, and Status( pass or fail )
*/
function gradeQuiz(candidateAnswers, correctAnswers) {
  let quiz = {
    responsesCorrect: 0,
    amtOfQuestions: 5,

    // Finds the percentage grade
    grade: function () { return (this.responsesCorrect / this.amtOfQuestions) * 100 },

    // Gets the Status
    status: function () {
      if (this.grade() >= 80) {
        return "PASSED";
      } else {
        return "FAILED";
      }
    }
  };

  // Checks the amount of questions user answered correctly
  for (let i = 0; i < quiz.amtOfQuestions; i++) {
    if (gradeQuestion(candidateAnswers[i], correctAnswers[i])) {
      quiz.responsesCorrect += 1;
    }
  }

  return quiz;
}

function runProgram() {
  candidateName = askForName();
  questions = [
    "1) Who was the first American woman in space? ",
    "2) True or false: 5000 meters = 5 kilometers. ",
    "3) (5 + 3)/2 * 10 = ? ",
    "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
    "5) What is the minimum crew size for the ISS? "
  ]
  correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "45"];
  candidateAnswers = [];

  // Loop : Asks user a question from the question array and pushes the answer to the candidateAnswers Arr
  // Displays: Your Answer, Correct Answer (does not check for correctness)
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(askQuestion(questions[i]));
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }

  let quizResults = gradeQuiz(candidateAnswers, correctAnswers);
  console.log(`>>> Overall Grade: ${quizResults.grade()}% (${quizResults.responsesCorrect} of ${quizResults.amtOfQuestions} responses correct) <<<`);
  console.log(`>>> Status: ${quizResults.status()} <<<`)

}

// Don't write any code below quiz line //
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