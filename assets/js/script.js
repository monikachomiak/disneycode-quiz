var timerEl = document.querySelector("#timer")
var startbtn = document.querySelector("#startbtn")
var currentQuestionIndex = 0


// Timer that counts down from 10 --> change to startquiz & add nextquestion function
function startQuiz() {
    var timeLeft = 10;


// Intervals
var timeInterval = setInterval(function () {
    // If the timeLeft is greater than 1
    if (timeLeft > 1) {
        //Set the textContent of timerEl to show the number of seconds remaining
        timerEl.textContent = timeLeft + ' seconds remaining'
        console.log(timeLeft);
    // Decrease timeLeft by 1
        timeLeft--;
    }
    else if (timeLeft === 1) {
        // When timeLeft is equal to 1, rename ' seconds ' to ' second'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
    }
    else {
    // Once timeLeft gets to 0, set timerEl to an empty string
        timerEl.textContent = '';
    // Use clearInterval to stop the timer
        clearInterval(timeInterval);
    // displayMessage Function
    displayMessage();

    }
},1000)

populateQuestions()

}

function populateQuestions(){
    //This gets the currentQuestion object from the array//
var currentQuestion = questions[currentQuestionIndex]
console.log(currentQuestion.prompt)

var promptEl = document.getElementById("prompt")
promptEl.innerHTML = currentQuestion.prompt

//Generate choices dynamically and show them on the page.
currentQuestion.choices.forEach
//create a button,
//set a value for the button
//display the button

}

startbtn.addEventListener("click", startQuiz)


