


// firstly i need to make a clock, 
// the clock should check for the current time
// it should update the time as readable (not in milliseconds)
// it should display to my main page.

function checkTime(){
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const timeString = `${hour}:${minute}:${second}`;
    document.getElementById("clock").textContent = timeString;
}
checkTime()


// i now have a function with a working clock. 
// next task is to get it to update in realtime.
// just discovered setInterval. this will execute a functon ^^^ at an interval.
// if time is represented in MS than i need to * by 1000

setInterval(checkTime, 1000)

// this worked!!!

//next step, i need alarm functionality.

// audio sound for alarm, will loop until cleared.

const audio = new Audio ("assets/mixkit-alarm-clock-beep-988.wav");
audio.loop = true;
// stores date from the alarm
let alarmTime = null;
// stores reference to the set alarm to clear
let alarmTimeout = null;

function setAlarmTime(value){
    alarmTime = value;
    console.log(alarmTime);
}
// this compares the alarm time to real time, plays audio and controls timeout.
function setAlarm(){
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current){
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert("Alarm Set.");
        }
    }
}
// function to stop the alarm or clear it.
function clearAlarm() {
    audio.pause();
    if (alarmTimeout){
        clearTimeout(alarmTimeout);
        alert("Alarm Cleared");
    }
}