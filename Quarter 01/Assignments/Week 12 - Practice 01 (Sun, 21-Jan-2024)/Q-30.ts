/*
Q # 30

// Logic Building

// 30. Basic Quiz Simulation

// Create a simple program that simulates a basic quiz using arrays and loops. Utilize arrays to store questions and answers, and loops for user interaction.
*/

// Function to run the quiz
function runQuiz(questions: string[], correctAnswers: string[]): void {
  let score: number = 0;

  for (let i = 0; i < questions.length; i++) {
    const userAnswer: string | null = prompt(
      `Question ${i + 1}: ${questions[i]}`
    );

    if (
      userAnswer !== null &&
      userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()
    ) {
      console.log("Correct!");
      score++;
    } else {
      console.log(`Incorrect. The correct answer is: ${correctAnswers[i]}`);
    }
  }

  console.log(`Quiz completed. Your score: ${score}/${questions.length}`);
}

// Example quiz data
const quizQuestions: string[] = [
  "What is the capital of Pakistan?",
  "Which planet is known as the Red Planet?",
  "What is the largest mammal in the world?",
];

const quizAnswers: string[] = ["Islamabad", "Mars", "Blue Whale"];

// Run the quiz with the provided questions and answers
runQuiz(quizQuestions, quizAnswers);
