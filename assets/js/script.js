// Timer that counts down from 10
function countdown() {
    var timeLeft = 10;

// Intervals
var timeInterval = setInterval(function () {
    //As long as the timeLeft is greater than 1
    if (timeLeft > 1) {
        //Set the textContent to show the number of seconds remaining
        timeInterval.textContent = timeLeft + ' seconds remaining '
    }
}
}