
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