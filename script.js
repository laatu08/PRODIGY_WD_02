let [millis, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime")
let timer = null

function stopwatch() {
    millis++;
    if (millis == 100) {
        millis = 0
        seconds++;
        if (seconds == 60) {
            seconds = 0
            minutes++

            if (minutes == 60) {
                minutes = 0
                hours++
            }
        }
    }


    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    let ms = millis < 10 ? "0" + millis : millis

    displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms
}


function watchStart() {
    if (timer != null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 10)
}

function watchStop() {
    clearInterval(timer)
}

function watchReset() {
    clearInterval(timer)
    // [seconds, minutes, hours] = [0, 0, 0]
    seconds = 0;
    minutes = 0
    hours = 0
    millis = 0
    displayTime.innerHTML = "00:00:00:00"
    console.log(displayTime)

    let div=document.getElementsByClassName('lap')
    Array.from(div).filter(e=>{
        e.remove()
    })
}

function lap() {
    if (millis != 0 || seconds != 0 || minutes != 0 || hours != 0) {
        let h = hours < 10 ? "0" + hours : hours
        let m = minutes < 10 ? "0" + minutes : minutes
        let s = seconds < 10 ? "0" + seconds : seconds
        let ms = millis < 10 ? "0" + millis : millis

        let div = document.createElement('div')
        div.innerHTML = h + ":" + m + ":" + s + ":" + ms
        div.classList.add('lap')
        let con = document.getElementById('container')
        con.appendChild(div)
    }
}