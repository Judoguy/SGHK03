// Arrow Functions

// const greet = (name) => {
//     console.log("Hi", name);
// }

const greet = (name) => console.log("Hi", name);

greet('Matt');

const square = (a) => a * a;
console.log(square(3));

// Template literals
let persons = ['Mike', 25];
console.log(`Hi! I'm ${persons[0]} and I am ${persons[1]} years old.`);


// Destructuring
// array
let nums =[1,2,3];

let [first,second,third] = nums;
console.log(first),console.log(second),console.log(third);
console.log(`${first}, ${second}, ${third} `); //single string

// objects
const numbers = {
    firstNum: 4,
    secondNum: 5,
    thirdNum: 6
}

let {firstNum, secondNum,thirdNum} = numbers;
console.log(firstNum, secondNum, thirdNum); // printed as varibles

// var person = {
//     name: 'John',
//     age: 30,
//     sayHello: function() {
//         console.log('Hello!');
//     }
// }

// Enhanced Object Literals
let age = 50

const person = {
    name: "John",
    age,
    greet2(){
        return `Hi! I'm ${this.name} and I am ${age} years old.`
    }
}

console.log(person.greet2());


// Spread and Rest
// Spread

function sum(x,y,z){
    return x+y+z
}

const numbersArr = [13, 23, 24];
console.log(sum(numbersArr[0], numbersArr[1], numbersArr[2]))
console.log(sum(...numbersArr))

// Rest
function myFunction(firstArg, secondArg, ...restOfArgs){
    console.log('first value; ', firstArg);
    console.log('second value; ', secondArg);
    console.log('rest of the values ', restOfArgs);
}

myFunction("blue",'red', "yellow", "black");
myFunction(3,6,9,12,15);

// default parameters
function multiply(a,b = 5){
    return a * b
}

console.log(multiply(2,))