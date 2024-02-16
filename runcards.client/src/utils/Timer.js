import { AppState } from "../AppState";
/**
 *
 * @param {string} elementName
 * id of the text element in html where the time will be injected
 * @param {number} minutes
 * desired minutes for timer to begin at
 * @param {number} seconds
 * desired seconds for timer to begin at
 * * @param {string} audioAlertName
 * id of the audio element in html we want to play on timer elapse
 */
export default function countdown(elementName, minutes, seconds, audioAlertName) {
    let element = document.getElementById(elementName);
    let endTime = Date.now() + 1000 * (60 * minutes + seconds);
  
    function twoDigits(n) {
      return (n <= 9 ? "0" + n : n);
    }
  
    function updateTimer() {
      let msLeft = endTime - Date.now();
      if (msLeft < 0) {
        // Timer has elapsed
        AppState.timeElapsed++;
        document.getElementById(audioAlertName).play();
        // Reset and start the timer again
        endTime = Date.now() + 1000 * (60 * minutes + seconds);
      }
  
      let time = new Date(msLeft);
      let hours = time.getUTCHours();
      let mins = time.getMinutes();
      let secs = time.getSeconds();
      element.innerHTML = (hours ? hours + ':' : '') + twoDigits(mins) + ':' + twoDigits(secs);
    }
  
    // Invoke updateTimer once to start the timer immediately
    updateTimer();
  
    // Set up the interval to update the timer every 100 milliseconds
    let timerInterval = setInterval(updateTimer, 100);
  }
