const firstCommit = Temporal.PlainDate.from("2025-06-09");
const today = Temporal.Now.plainDateISO();
const duration = today.since(firstCommit, {largestUnit:'years'});

export function onlineSince() {
    var time = duration.years + " years " + duration.months + " months " + duration.days + " days";
    return time;
}
document.getElementById("elapsedTimeDisplay").innerHTML = onlineSince();
window.timeOnline = onlineSince;