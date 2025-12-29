async function getCorpus(jsonFile) {
    const corpusJSON = await fetch(jsonFile);
    const corpusArray = await corpusJSON.json();
    return corpusArray;
}

// Creates a random index to access an element of the corpus
function getIndex(corpusArray) {
    let arrayLen = corpusArray.length;
    return Math.floor(Math.random() * arrayLen);
}

function makeHearsay(corpusArray) {
    let hearsayLen = document.getElementById("hearsayLenUser").value;
    let separator = document.getElementById("separatorUser").value;
    let hearsay = "";
    for (let i = 1; i <= hearsayLen; i++) {
        let index = getIndex(corpusArray);
        hearsay += corpusArray[index] + separator;
    }
    const hearsayCutPoint = hearsay.length - 1;
    return hearsay.substring(0, hearsayCutPoint); // removes hanging separator at the end of the string
}

function getLine(corpusArray) {
    let index = getIndex(corpusArray);
    let line = corpusArray[index];
    return line
}

function getSentence() {
    let book = document.getElementById("bookSelector").value;
    let index = getIndex(book);
    let line = book[index];
    return line
}

function displayHearsay(jsonFile) {
  getCorpus(jsonFile).then(
  function(value) {
            let hearsay = makeHearsay(value);
            document.getElementById("wizardQuote").innerHTML = hearsay;
  },
  function(error) {
            console.error('Error fetching corpus:', error);
            document.getElementById("wizardQuote").innerHTML = "Error loading text";}
);
}

function displayLine(jsonFile) {
  getCorpus(jsonFile).then(
  function(value) {
            let line = getLine(value);
            document.getElementById("wizardQuote").innerHTML = line;
  },
  function(error) {
            console.error('Error fetching corpus:', error);
            document.getElementById("wizardQuote").innerHTML = "Error loading text";}
);
}

let showStatus = 0;
function showSettings() {
    if (showStatus == 0) {
        showStatus = 1
        document.getElementById("hearsayLenUser").style.display = "inline-block";
        document.getElementById("separatorUser").style.display = "inline-block";
        document.getElementById("bookSelector").style.display = "inline-block";
    } else {
        showStatus = 0;
        document.getElementById("hearsayLenUser").style.display = "none";
        document.getElementById("separatorUser").style.display = "none";
        document.getElementById("bookSelector").style.display = "none";
    };
}

function getRandomText() {
    // to implement:
    // selects a mode (hearsay or read)
    // select settings depending on mode: book, length, etc.

    // Get random book:
    let bookTitlesArray = ["./json/bibleVerses.json", "./json/dorianGray.json", 
        "./json/castleOtranto.json", "./json/dracula.json", 
        "./json/vampyr.json", "./json/kingArthur.json"];
    let arrayLen = bookTitlesArray.length;
    let index = Math.floor(Math.random() * arrayLen);
    result = bookTitlesArray[index];
    displayLine(result);
}