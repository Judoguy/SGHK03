//Arithmetic Operations
let x = 8;
let y = 5;

let sum = x+y;
console.log("sum: ", sum);

let diff = x-y;
console.log("diff: ", diff);

let mult = x*y;
console.log("mult: ", mult);

let div = x/y;
console.log("div: ", div);

let remain = x%y;
console.log("modulus: ", remain);

// string expressions
console.log("Hello, "+"I am "+"Matt.")


// Logical Expressions
let sunny = true;
let warm = false;

// AND, OR, NOT

console.log("Sunny AND Warm: ", sunny && warm);
console.log("Sunny OR Warm: ", sunny || warm);
console.log("Not Sunny: ", !sunny);


let a = 10;
let b = 5;

a += b;
console.log("a :",a);

a -= b;
console.log("a :",a);

a *= b;
console.log("a :",a);

a /= b;
console.log("a :",a);

// conditional statements
let age = 17;
if(age>=18){
    console.log("You are eligible to vote.")
} else {
    console.log("You are not old enough to vote.")
}

let temp = 25; 

if(temp < 0){
    console.log("It's freezing");
}else if (temp >= 0 && temp < 20){
    console.log("It's cool outside");
}else{
    console.log("It's a warm day");
}


function temps(x){// setting a constant named kelvin to 293
    const kelvin = x;

    // setting a varible called celsius from kelvin
    let celsius = kelvin-273;

    // converts the temp from Celsius to Fahrenheit
    let Fahrenheit = (celsius * (9/5)) + 32;

    console.log("Temp in Fahrenheit: " ,Fahrenheit);
    }

temps(296);

function grade(x){
    let score= x;
    if( score >=90){
        console.log("A");
    } else if(score <90 && score >=80){
        console.log("B");
    } else if(score <80 && score >=70){
        console.log("C");
    } else if(score <70 && score >=60){
        console.log("D");   
    } else {
        console.log("F");
    }
}
grade(90);