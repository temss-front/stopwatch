let mseconds = 0
let toggle = false
let stopwatchInterval
const lapArr = []
let i = 1

const stopwatch = document.querySelector('.stopwatch')
const startBtn = document.querySelector('#start')
const lapBtn = document.querySelector('#lap')
const laps = document.querySelector('#laps')


const timeHtml = (time) => {
    let ms = time % 100
    let seconds = Math.floor((time / 100) % 60)
    let minutes = Math.floor((time / (100 * 60)) % 60)
    // let hours = (time / (100 * 60)) % 24 ??

    let secondsText = String(seconds).padStart(2, "0");
    let minutesText = String(minutes).padStart(2, "0");
    let msText = String(ms).padStart(2, "0");

    return `${minutesText}:${secondsText}.${msText}`;
}

const stopwatchStart = () => {
    ++mseconds
    stopwatch.innerHTML = timeHtml(mseconds);
}

function toggleStopwatch() {
    if (!toggle) {
	   toggle = true
	   stopwatchInterval = setInterval(stopwatchStart, 10)
    } else {
	   toggle = false
	   clearInterval(stopwatchInterval)
	   mseconds = 0
	   stopwatch.innerHTML = '00.00.000'
	   lapArr.length = 0
	   laps.innerHTML = ''
    }
}

startBtn.addEventListener('click', toggleStopwatch)
lapBtn.addEventListener('click', () => {
    if (toggle) {
	   lapArr.push(mseconds)
	   let lap = document.createElement('div')
	   if (lapArr.length < 2) {
		  lap.innerHTML = `${i}-ый круг: ${timeHtml(lapArr[lapArr.length - 1])}`
	   } else {
		  lap.innerHTML = `${i}-ый круг: ${timeHtml(lapArr[lapArr.length - 1] - lapArr[lapArr.length - 2])}`
	   }
	   laps.append(lap)
	   i++
    }
})
