// use it to get the chuncks of the main text
async function getCorpus(text_file) {
 let corpus = await fetch(text_file);
 let corpusText = await corpus.text();
 document.getElementById("hearsayTest").innerHTML = corpusText
}