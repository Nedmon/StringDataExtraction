// Global Varibles

let alphaString = `abcdefghijklmnopqrstuvwxyz` 

let alphaArray = alphaString.split(``); 
alphaArray.unshift(undefined)  // array, indexes of which corrospond to letters in the alphabet

function removeSpace(string) {
	let exclude = ``;
	for(let i = 0; i < string.length; i++) {
		if(string[i] == " ") {
			// Do Nothing
		} else {
			exclude +=string[i]
		}
	}
	return exclude.length;
}

function removeAllCharacter(string) {
	let exclude = [];
	let charString = " .?!*_-^#%@";
	for(let c = 0; c < string.length; c++) {
		exclude.push(string[c]);
		for(let i = 0; i < charString.length; i++) {
			if (string[c] == charString[i]) {
				exclude.pop();
			}
		}
	}


	return exclude.join("").length
}

// Global Varibles


// Function Definitions
function getNumberOfLetters() {
	let newString = ``;
	let charCounter = 0;
	let getContent = document.getElementById("T1");
	let splitContent = getContent.value.split("");
	let getAlpha = document.getElementById("alphaInfo");
	for(let x = 0; x < splitContent.length; x++) {
		newString +=splitContent[x];
		charCounter++;
	}
	if(getAlpha.style.display == "none") {
		for(let char = 0; char < newString.length; char++) {
			for(let alpha = 1; alpha < alphaArray.length; alpha++) {
				if(newString[char] == alphaArray[alpha]) {
					 document.getElementById(alphaArray[alpha]).innerHTML = parseInt(document.getElementById(alphaArray[alpha]).innerHTML, 10) + 1
				}
			}
		}
	getAlpha.style.display = "block";
	alert(removeAllCharacter(newString))

	} else if(getAlpha.style.display == "block") {
		getAlpha.style.display = "none"
		for(let i = 1; i < alphaArray.length; i++) {
			document.getElementById(alphaArray[i]).innerHTML = 0;
		}
	}
}

// Function Definitions




// Toggle Functions

/*let getAlpha = document.getElementById("alphaInfo");
document.getElementById("letter_count").addEventListener("click", function() {
	getAlpha.style.display == "none" ? getAlpha.style.display = "block" : getAlpha.style.display = "none";
})
*/
// Toggle Functions



// Add Event Listeners

document.getElementById("letter_count").addEventListener("click", function() {
	getNumberOfLetters();
})

// Add Event Listeners