let countdown;
let timerDisplay = document.getElementById('display');
let timeInput = document.getElementById('timeInput');
function startTimer() {
     clearInterval(countdown);
 
     const hours = parseInt(document.getElementById('hoursInput').value);
     const minutes = parseInt(document.getElementById('minutesInput').value);
     const seconds = parseInt(document.getElementById('secondsInput').value);
 
     if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || (hours === 0 && minutes === 0 && seconds === 0)) {
         alert("Please enter a valid time.");
         return;
     }
 
     const totalTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds;
 
     const startTime = Date.now();
     const endTime = startTime + (totalTimeInSeconds * 1000);
 
     displayTimeLeft(totalTimeInSeconds);
 
     countdown = setInterval(() => {
         const secondsLeft = Math.round((endTime - Date.now()) / 1000);
 
         if (secondsLeft < 0) {
             clearInterval(countdown);
             displayEndOfTime();
             return;
         }
 
         displayTimeLeft(secondsLeft);
     }, 1000);
 }

 function displayTimeLeft(seconds) {
     const hours = Math.floor(seconds / 3600);
     const minutes = Math.floor((seconds % 3600) / 60);
     const remainderSeconds = seconds % 60;
     const display = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
 
     // Change text color to red when 30 seconds or below
     if (seconds <= 30) {
         timerDisplay.style.color = "red";
     } else {
         timerDisplay.style.color = "black";
     }
 
     timerDisplay.textContent = display;
 }
 

function displayEndOfTime() {
    timerDisplay.textContent = "End of Time!";
    timerDisplay.style.color = "red"; // Change text color to red (you can customize this)
}

 