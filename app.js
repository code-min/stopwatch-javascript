let startButton = document.querySelector(".btn-start");
startButton.addEventListener("click", startTimer);
let resetButton = document.querySelector(".btn-reset").addEventListener("click", resetTimer);
let msSpan = document.querySelector(".milliseconds");
let secondsSpan = document.querySelector(".seconds");
let minutesSpan = document.querySelector(".minutes");

let milliseconds = seconds = minutes = 1;
let active = true;

//start timer if user clicks on start button
function startTimer(e) {
    //stop timer if user clicks again on left button and active is set to false
    if(active === false) {
        stopTimer(e.target);
        return true;
    }
    //change color of start button to red and set text to Pause
    this.style.backgroundColor = "#D43E3F";
    this.innerHTML = "Pause";

    startIntervalMs();
}

//start an interval -> call interval every 100 milliseconds
function startIntervalMs() {
    active = false;
    interval = setInterval(() => {
        //if one seconds is over -> change milliseconds back to 0 and call updateTime
        if(milliseconds === 10) {
            milliseconds = 0;
            updateTime(seconds, secondsSpan);
        }
        //change text of miliseconds and increase miliseconds by one
        msSpan.innerHTML = milliseconds;
        milliseconds++;
    }, 100);
}

//update time -> seconds and minutes
function updateTime(time, element) {
    if(time < 10) {
        element.innerHTML = `0${time}`;
    } else if(time === 60) {
        element.innerHTML = "00";
        seconds = 0;
        updateTime(minutes, minutesSpan);
        minutes++;
    } else {
        element.innerHTML = time;    
    }
    seconds++;
} 

//stop interval and change button to continue
function stopTimer(item) {
    clearInterval(interval);
    active = true;
    item.style.backgroundColor = "#4CAF50";
    item.innerHTML = "Continue";
}

//if reset button was clicked -> reset interval, chnange values back to starting point
function resetTimer() {
    clearInterval(interval);
    active = true;
    msSpan.innerHTML = "0";
    secondsSpan.innerHTML = "00";
    minutesSpan.innerHTML = "00";
    startButton.innerHTML = "Start";
    startButton.style.backgroundColor = "#4CAF50";
    milliseconds = seconds = minutes = 1;
}