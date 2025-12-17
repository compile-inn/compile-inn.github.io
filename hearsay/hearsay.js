// use it to get the chuncks of the main text
async function getCorpus(json_file) {
    
    let file_promise = await fetch(json_file);
    let corpusText = await file_promise.json();
    let array_len = corpusText.length;
    let index = Math.floor(Math.random() * array_len);
    let hearsay = corpusText[index];

    document.getElementById("hearsayTest").innerHTML = hearsay;
}