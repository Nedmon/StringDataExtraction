// Global Varibles

let alphaString = `abcdefghijklmnopqrstuvwxyz`;
let alphaUpper = `abcdefghijklmnopqrstuvwxyz`.toUpperCase();

let alphaArray = alphaString.split(``); 
let alphaArrayUpper = alphaUpper.split(``);
alphaArray.unshift(undefined)  // array, indexes of which corrospond to letters in the alphabet
alphaArrayUpper.unshift(undefined)


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
	alert(Math.round(sum))
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

// Add Event Listeners