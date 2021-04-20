document.getElementById("displayBtn").addEventListener("click", function() {
	wordCount()
})



function wordCount() {
	let getContent = document.getElementById("T1").value
	let getCountWord  = document.getElementById("countWord")

	let contentSplit = getContent.split(" ");
	let wordCounter = 0;

	for( let word = 0; word < contentSplit.length; word++) {
		wordCounter++;
	}


	getCountWord.innerHTML = wordCounter;
}