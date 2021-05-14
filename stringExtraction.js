// Global Varibles

let alphaString = `abcdefghijklmnopqrstuvwxyz`;
let alphaUpper = `abcdefghijklmnopqrstuvwxyz`.toUpperCase();

let alphaArray = alphaString.split(``); 
let alphaArrayUpper = alphaUpper.split(``);
alphaArray.unshift(undefined)  // array, indexes of which corrospond to letters in the alphabet
alphaArrayUpper.unshift(undefined)



function findLongest(string) {
	let count = string.split(". ");
	let sen = [];
	for(let i = 0; i < count.length; i++) {
		let sentence = count[i].split(" ")
		let c = 0;
		for(let y = 0; y < sentence.length; y++) {
			if(c < sentence.length) {
				c++;
				if(c == sentence.length) {
					sen.push(c)
				}
			}
		}
	}
	alert(sen.reverse())
}

function countWord(string) {
	let inforString = ``;
	let arr = [];
	let wordCounter = 0;
	let wordGroup = string.split(" ");
	for(let i = 0; i < wordGroup.length; i++) {
		if(arr[i] == true) {

		} else {
			let wordCounter = 0;
			arr[i] = true
			for(let h = i + 1; h < wordGroup.length; h++) {
				if(wordGroup[h] == wordGroup[i]) {
					wordCounter++;
					arr[h] = true;
				}
			}
			inforString +=`"${wordGroup[i]}" appears ${wordCounter + 1} times` + "<br />";
		}
	}
	document.getElementById("para_word_info").innerHTML = inforString;
}


// Returns length of string with spaces and new-line characters removed
function removeSpace(string) {
	let exclude = ``;
	for(let i = 0; i < string.length; i++) {
		if(string[i] == " " || string[i] == "\n") {
			// Do Nothing
		} else {
			exclude +=string[i]
		}
	}
	return exclude.length;
}


// Returns length of string with special characters removed. 
// This is done by looping through the user string and pushing each iteration (character) into the array.
// However, for each iteration, immediately after being added, I loop through the special character string.
// If the iteration of the outter loop matches any of the special characters, that character will be pushed out of the array.

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

function getPercent(whole, part) {   // Uses the percentage formula to get % of each letter
	let percent = part / whole;
	let realPertent = [];
	if(percent == 1) {
		return String(percent).concat("00%");
	} else {
		let reduceDecimal = percent.toFixed(4);
		let percentString = String(reduceDecimal);
		for(let g = percentString.length - 1; g > 0; g--) {
			if(realPertent.length == 2) {
				realPertent.unshift(".")
			}
			realPertent.unshift(percentString[g])
		}
		let finalPercert = realPertent.join("");
		if(finalPercert[1] == "0") {
			return finalPercert.slice(2).concat("%");
		} else {
			return finalPercert.slice(1).concat("%");
		}
	}
	
}

function addPercent() {   //Gets pertentage of each letter and adds it
	let sum = 0;
	for(let x = 1; x < alphaArray.length; x++) {
		sum +=parseFloat(document.getElementById(`%${alphaArray[x]}`).innerHTML);
	}
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
				if(newString[char] == alphaArray[alpha] || newString[char] == alphaArrayUpper[alpha]) {
					 document.getElementById(alphaArray[alpha]).innerHTML = parseInt(document.getElementById(alphaArray[alpha]).innerHTML, 10) + 1
				}
			}
		}
		for(let i = 1; i < alphaArray.length; i++) {
			document.getElementById(`%${alphaArray[i]}`).innerHTML = getPercent(removeSpace(newString), Number(document.getElementById(alphaArray[i]).innerHTML))
		}
		
	getAlpha.style.display = "block";
	addPercent();

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
document.getElementById("word_count").addEventListener("click", function() {
	countWord(document.getElementById("T1").value);
})
document.getElementById("word_count").addEventListener("click", function() {
	findLongest(document.getElementById("T1").value);
})

// Add Event Listeners