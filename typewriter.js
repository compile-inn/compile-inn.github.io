
// a cursor: block element that blinks over the last letter? 
// Or simpler, the last letter background and color are reversed (no need to implement blinking.)

// functions

// for extra fun implement typos (each letter has a neighborhood of mistakes, e = w, d, r,
// if typo is true neighborhood letter is picked then erased.)

// This function returns an index based on a random number
// from last printed character + 1 (start). Thus the result
// is a feed for the next stream of characters to be printed
// before pausing.

// Create a count in the loop. End loop when count = textLength.
// Update random number range to start at the last printed charac index + 1.
// call this function as many time as need with a loop

// then a function that takes the first one, and repeat it at a givent pace until the end.
// lastly a function that pauses the overall display for a given time span every.
// This last function must also be called at random times.


let text = "How these papers have been placed in sequence will be made manifest in the reading of them.";
let textLength = text.length;

// Concatenates a character to the target HTML element
function addChar(index) {
    document.getElementById("typedText").innerHTML += text[index];
}

function typeText() {
    let counter = 0;
    let pauseLength = Math.random * 1000;
    while (counter < textLength) {
        counter += 1;
        setInterval(addChar(index), pauseLength);
    }
}
