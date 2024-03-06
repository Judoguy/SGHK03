function calculate(num1, num2, operation){
    return operation(num1, num2)
}

function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiple(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

let result1 = calculate(5,3,add);
let result2 = calculate(5,3,subtract);
let result3 = calculate(5,3,multiple);
let result4 = calculate(5,3,divide);


console.log("Addition: ", result1)
console.log("Subtraction: ", result2)
console.log("Multiplication: ", result3)
console.log("Division: ", result4)

