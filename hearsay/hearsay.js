// use it to get the chuncks of the main text
async function getCorpus(text_file) {
    let corpus = await fetch(text_file);
    let corpusText = JSON.parse(corpus)
    //let corpusText = await corpus.text();
    let array_len = corpusText.length
    let index = Math.random() * array_len
    let hearsay = corpusText[index]
    document.getElementById("hearsayTest").innerHTML = hearsay
}