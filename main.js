
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
    document.getElementsByClassName("clock").textContent =timeString;
}