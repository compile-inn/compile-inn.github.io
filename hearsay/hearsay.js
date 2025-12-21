async function getCorpus(jsonFile) {
    const corpusJSON = await fetch(jsonFile);
    const corpusArray = await corpusJSON.json();
    return corpusArray;
}

function makeHearsay(corpusArray) {
    // add further settings option later
    const arrayLen = corpusArray.length;
    let hearsayLen = 4;
    let separator = " ";
    let hearsay = "";
    for (let i = 1; i <= hearsayLen; i++) {
        let index = Math.floor(Math.random() * arrayLen);
        hearsay += corpusArray[index] + separator;
    }
    return hearsay.trim(); // only works if separator is whitespace
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