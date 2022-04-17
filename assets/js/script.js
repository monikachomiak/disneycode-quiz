// Timer that counts down from 10
function countdown() {
    var timeLeft = 10;

// Intervals
var timeInterval = setInterval(function () {
    // As long as the timeLeft is greater than 1
    if (timeLeft > 1) {
        //Set the textContent of timerDec to show the number of seconds remaining
        timerDec.textContent = timeLeft + ' seconds remaining'
    // Decrease timeLeft by 1
        timeLeft--;
    }
    else if (timeLeft === 1) {
        // When timeLeft is equal to 1, rename ' seconds ' to ' second'
        timerDec.textContent = timeLeft + ' second remaining';
        timeLeft--;
    }
    else {
    // Once timeLeft gets to 0, set timerDec to an empty string
        timerDec.textContent = '';
    // Use clearInterval to stop the timer
        clearInterval(timeInterval);
    // displayMessage Function
    displayMessage();

    }
}
}