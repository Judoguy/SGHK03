// String
// split method

const message = "~Hello, World~";
const words = message.split(", ");
console.log(words);

// includes
const sentence = "The quick brown border collie jumps over the lazy black dog and the fox."
const constainsWord = sentence.includes("dog");
console.log(constainsWord);

// length - includes whitespaces
const sampleString = "Welcome to the Jungle!";
const strLength = sampleString.length;
console.log(strLength);

// Math Methods
// max
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);

const minNumber = Math.min(10, 5, 20);
console.log(minNumber);

let a = [10, 5, 20]

const maxNumber2 = Math.max(...a);
console.log(maxNumber2);

// random - 0 to 1
const randomvalue = Math.random();
console.log(randomvalue);

// Floor
const roundedFloor = Math.floor(3.2);
console.log(roundedFloor);

// Ceil
const roundedCeil = Math.ceil(3.9);
console.log(roundedCeil);

// Round
const roundedValue = Math.round(3.4);
console.log(roundedValue);

// Nesting math methods
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1))
}

const randomInt = getRandomInt(1,10);
console.log(randomInt);

// Other built in methods\
const fixedNumber = (3.1415923454).toFixed(2)
console.log(fixedNumber);

// date
const currentDate = new Date()
console.log(currentDate);
