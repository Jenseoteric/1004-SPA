let startTime = Date.now(); // gets start time on page load
console.log("starting timer..");
let hours;
let minutes;
let seconds;
let millis;
let timetracker = document.getElementById("timetracker"); // "time passed" paragraph


function getTimeElapsed() { // calculates time elapsed since page load
	millis = Date.now() - startTime;
	hours = Math.floor(millis / (1000*60*60) % 24);
	minutes = Math.floor(millis / (1000*60) % 60);
	seconds = Math.floor(millis / 1000) % 60;
}

function updateTimeTracker() { // updates "time passed" paragraph
	getTimeElapsed();
	let text = (hours + " hours, " + minutes + " minutes, " + seconds + " seconds");
	//timetracker.textContent = ("Time passed: " + text);
}

function timer() {
	setInterval(updateTimeTracker, 1000);	// calls updateTimeTracker method every 1 second
}

document.addEventListener("DOMContentLoaded", timer); // starts timer on page load
