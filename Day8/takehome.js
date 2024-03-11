const square = (num) => num * num;
console.log(square(5));


let name= "Jim";
let age= 35;

function greeting(name,age){
    console.log(`Hi, I'm ${name} and I'm ${age} years old.`)
}

greeting(name,age)

const fullName = "Jim Brown";
const names = fullName.split(" ");
console.log(names[0]);
console.log(names[1]);


let arr1 = [100,200,300];
let arr2 = [400,500,600];

const new_array = [...arr1, ...arr2];
console.log(new_array);

function rectArea(length= 5,width=10){
    return length * width
}

console.log(rectArea());