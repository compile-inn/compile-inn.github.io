// use it to get the chuncks of the main text
async function getCorpus(json_file) {
    let file = await fetch(json_file);
    let corpus = JSON.stringify(file)
    let corpusText = JSON.parse(corpus)
    //let corpusText = await corpus.text();
    let array_len = corpusText.length
    let index = Math.floor(Math.random() * array_len)
    let hearsay = corpusText[index]
    document.getElementById("hearsayTest").innerHTML = hearsay
}