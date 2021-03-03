
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. Each row of a table should have the same number of columns.",
      answers: {
        a: "True",
        b: "False"        
      },
      correctAnswer: "a"
    },

    {
      question: "Q2. Is we can add width and height in ‹table› tag. State True Or False.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },

    {
      question: "Q3. Select the tags used within the ‹table› tag.",
      answers: {
        a: "tr",
        b: "td",
        c: "th",
        d: "All of the above"      
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q4. Select the correct full form of the ‹th› tag used within the ‹table› tag.",
      answers: {
        a: "table heading",
        b: "table header",
        c: "table height",
        d: "All of the above"      
      },
      correctAnswer: "d"
    },
	
	{
      question: "Q5. In HTML tables gap between two cells of same tables are known as.",
      answers: {
        a: "Cell spacing",
        b: "Cell difference",
        c: "Cell padding",
        d: "All of the above"
      },
      correctAnswer: "a"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
