let text = "You seem lost, but in the distance you see a keep. Maybe you should head there, get a drink and listen to a hearsay or two.";
const textLength = text.length;
let counter = 0;
const cursor = document.getElementById("cursor");

const typedMessage = setInterval(addChar, 200);
const blinkingCursor = setInterval(blink, 500);
function addChar() {
    if (counter < textLength) {
        document.getElementById("typedText").innerHTML += text[counter];
        counter += 1;
    } else {
        stopTyping();
    }
}

function stopTyping() {
    clearInterval(typedMessage);
}

function blink() {
    cursor.style.opacity = cursor.style.opacity === '0' ? '0.5' : '0';
}

/* To do:
- Use clearInterval to introduce different typing speeds 
- After a few seconds, ask "Still here?" and then start a little text-adeventure.
- Can javascript play notes?
*/