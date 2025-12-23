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
    // add further settings option later
    const arrayLen = corpusArray.length;
    let hearsayLen = document.getElementById("hearsayLenUser").value;
    let separator = document.getElementById("separatorUser").value;
    let hearsay = "";
    for (let i = 1; i <= hearsayLen; i++) {
        let index = Math.floor(Math.random() * arrayLen);
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
