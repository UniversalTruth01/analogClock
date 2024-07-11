// Get references from DOM elements

const body = document.querySelector("body"),
hourHand = document.querySelector(".hour"),
minuteHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second"),
modeSwitch = document.querySelector(".mode-switch");

// Add a click event listener to modeSwitch

modeSwitch.addEventListener("click", () => {
    // Toggle the "dark" class on the body element
    body.classList.toggle("dark")
})

const updateTime = () => {
    // Get current time and help you calculate degrees for clock hands 
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360;
    minToDeg = (date.getMinutes() / 60) * 360;
    hrToDeg = (date.getHours() / 12 * 360);

secondHand.style.transform = `rotate(${secToDeg}deg)`;
minuteHand.style.transform = `rotate(${minToDeg}deg)`;
hourHand.style.transform = `rotate(${hrToDeg}deg)`;
}

//console.log(secToDeg)

setInterval(updateTime, 1000);

updateTime();