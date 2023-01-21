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
export default function countdown( elementName, minutes, seconds, audioAlertName )
{
    var element, endTime, hours, mins, msLeft, time;
    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
          AppState.timeElapsed++
          document.getElementById(audioAlertName).play()
            return countdown("time", 10, 0, "timeElapsedAlert");
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    updateTimer();
}
