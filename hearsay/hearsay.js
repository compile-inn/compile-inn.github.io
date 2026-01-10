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
    if (book == "random") {
        let line = getRandomText();
        return line
    } else {
        let pathAndTitle = getBookPathAndTitle(book);
        let bookPath = pathAndTitle[0];
        let title = pathAndTitle[1];
        let quote = displayLine(bookPath, title);
        return quote
    }
}

// get path and title of the user-selected book.
function getBookPathAndTitle(selectedBookOpt) {
    arr = JSON.parse(selectedBookOpt);
    let bookPath = arr[0];
    let bookTitle = arr[1];
    let quoteInfo = [bookPath, bookTitle] 
    return quoteInfo
}

function displayHearsay(jsonFile) {
  getCorpus(jsonFile).then(
  function(value) {
            let hearsay = makeHearsay(value);
            document.getElementById("bookTitle").style.display = "none";
            document.getElementById("wizardQuote").innerHTML = hearsay;
  },
  function(error) {
            console.error('Error fetching corpus:', error);
            document.getElementById("wizardQuote").innerHTML = "Error loading text";
            document.getElementById("bookTitle").innerHTML = "Error loading title";
         }
);
}

function displayLine(jsonFile, bookTitle) {
  getCorpus(jsonFile).then(
  function(value) {
            let line = getLine(value);
            document.getElementById("wizardQuote").innerHTML = line;
            document.getElementById("bookTitle").style.display = "inline-block";
            document.getElementById("bookTitle").innerHTML = bookTitle;
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

// maybe the book title could be inserted directly in the corpus json...

// get ranbom book and its title.
function getRandomText() {
    const bookshelfArray = {
        "books" : [
        {"path" : "./json/bibleVerses.json",
         "title" : "King James Bible"},
        {"path" : "./json/dorianGray.json",
         "title" : "The Portrait of Dorian Gray - Oscar Wilde"},
        {"path" : "./json/dracula.json",
         "title" : "Dracula - Bram Stoker"}, 
        {"path" : "./json/vampyr.json",
         "title" : "The Vampyre - John William Polidori"}, 
        {"path" : "./json/castleOtranto.json",
         "title" : "The Castle of Otranto - Horace Walpole"},
        {"path" : "./json/kingArthur.json",
         "title" : "King Arthur and the Knights of the Round Table - Sir Thomas Malory"},  ]
        }
    
    let arrayLen = bookshelfArray.books.length;
    let index = Math.floor(Math.random() * arrayLen);
    let book = bookshelfArray.books[index];
    let bookPath = book.path;
    let bookTitle = book.title;
    displayLine(bookPath, bookTitle);
}

// Any non-default value for opt will hide the html element attached to elementId.
function htmlElementSwitch(elementId, opt = "default") {
    let displayStatus = elementId.style.display;
    if (opt == "default") {
        if (displayStatus == "none") {
        document.getElementById(elementId).style.display = "inline-block";
        } else {
        document.getElementById(elementId).style.display = "none";}
    } else {
        document.getElementById(elementId).style.display = "none";
    }
}