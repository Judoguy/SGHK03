// functions
// defining a function
function greet(){
    console.log("Welcome to the world of functions!");
};
// Calling a function 
greet();
greet();
greet();
greet();

// 2 ways to write a function
// 1. function declaration

function squareDeclaration(num){
  return num * num  
};

// 2. function expression
    // anonymous function
const squareExpression = function(num){
    return num * num
};

d = squareDeclaration(3);
e = squareExpression(4);

console.log(d,e)

// function Hoisting
sayHello()

function sayHello(){
    console.log("Hello function hoisting!")
};


anonymousFunction();

const anonymousFunction = function() {
    console.log("Anonymous func");
};