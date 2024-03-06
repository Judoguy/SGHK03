function greet(name){
    console.log(`Yo! My name is ${name}! Don't get it twisted.`);
}

greet("Matt");

let number = 42;
function scope(){
    let number = 42;
    console.log(number);
}
scope();
console.log(number);

function mathOperation(num1, num2, operation){
    return operation(num1, num2)
}

function power(a,b){
    return a **b
}

let solution = mathOperation(3,3,power);
console.log("Power: ", solution)