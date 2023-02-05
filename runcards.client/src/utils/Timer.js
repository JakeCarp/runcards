import { AppState } from "../AppState";
import Timer from "tiny-timer"

export default function countdown()
{
    const timer = new Timer({ interval: 1000, stopwatch: false });
    timer.on('tick', (ms) => AppState.timeString = convertMsToTime(ms));
    timer.on('done', () => {
      document.getElementById("timeElapsedAlert").play();
      AppState.timeElapsed++;
      timer.start(600000);
    });

    timer.start(600000); // run for 10 mins
}
function convertMsToTime(milliseconds){
  let seconds = Math.floor((milliseconds / 1000) % 60);
  if(seconds <= 9 ? seconds = "0" + seconds : seconds);
  let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    return `${minutes}:${seconds}`;
}
