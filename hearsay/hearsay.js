// use it to get the chuncks of the main text
/*

async function getCorpus(json_file) {

    let file_promise = await fetch(json_file);
    let corpusText = await file_promise.json();
    let array_len = corpusText.length;
    let index = Math.floor(Math.random() * array_len);
    let hearsay = corpusText[index];

    document.getElementById("hearsayTest").innerHTML = hearsay;
}
*/
/*
function handleGetCorpus(json_file) {
    getCorpus(json_file)
        .catch(error => {
            console.error('Error fetching corpus:', error);
            document.getElementById("hearsayTest").innerHTML = "Error loading text";
        });
}
*/

async function getCorpus(jsonFile) {
    const corpusJSON = await fetch(jsonFile);
    const corpusArray = await corpusJSON.json();
    return corpusArray;
}

function makeHearsay(corpusArray) {
    const arrayLen = corpusArray.length;
    let index = Math.floor(Math.random() * arrayLen);
    let hearsay = corpusArray[index];
    return hearsay;
}

function displayHearsay(jsonFile) {
  getCorpus(jsonFile).then(
  function(value) {
            let hearsay = makeHearsay(value);
            document.getElementById("hearsayTest").innerHTML = hearsay;
  },
  function(error) {
            console.error('Error fetching corpus:', error);
            document.getElementById("hearsayTest").innerHTML = "Error loading text";}
);
}