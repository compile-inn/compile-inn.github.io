
// a cursor: block element that blinks over the last letter? 
// Or simpler, the last letter background and color are reversed (no need to implement blinking.)


let text = "How these papers have been placed in sequence will be made manifest in the reading of them.";
let textLength = text.length;

// Concatenates a character to the target HTML element
function addChar(index) {
    document.getElementById("typedText").innerHTML += text[index];
}
function fridayNightHackySolution() {
    console.log("I was called!")
}
function typeText() {
    let counter = 0;
    let pauseLength = Math.random * 1000000;
    while (counter < textLength) {
        addChar(counter);
        counter += 1;
        setTimeout(fridayNightHackySolution(), pauseLength)
    }
}
