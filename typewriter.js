let text = "You seem lost, but in the distance you see a keep. Maybe you should head there, get a drink and listen to a hearsay or two.";
const textLength = text.length;
let counter = 0;

const typedMessage = setInterval(addChar, 200);

function addChar() {
    if (counter < textLength) {
        document.getElementById("typedText").innerHTML += text[counter];
        counter += 1;
        console.log("As usual, nothing works.");
    } else {
        stopTyping();
    }
}

function stopTyping() {
    clearInterval(typedMessage);
}