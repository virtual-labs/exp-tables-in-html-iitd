
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
      question: "Q1. Each cell of the table can be represented by using __________.",
      answers: {
        a: "tr",
        b: "td",
        c: "th",
        d: "thead"
      },
      correctAnswer: "b"
    },

    {
      question: "Q2. For table heading we can use ____________.",
      answers: {
        a: "td",
        b: "tr",
        c: "thead",
        d: "th"
      },
      correctAnswer: "d"
    },

    {
      question: "Q3. If you want to merge two or more rows in a table which attribute you can use?",
      answers: {
        a: "Rowmerge",
        b: "Rowspan",
        c: "Colmerge",
        d: "Colspan"
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q4. Which tag allows you to add a row in a table?",
      answers: {
        a: "<tr></tr>",
        b: "<cr></cr>",
        c: "<table></table>",
        d: "<tbody></tbody>"
      },
      correctAnswer: "a"
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
