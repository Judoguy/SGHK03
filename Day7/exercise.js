// Fizz Buzz
//  numbers 1-100. for multiples of 3 Fizz, 5 Buzz and 3&5 Fizzbuzz


// for (let i = 0; i < 100; i++){
//     if (i%3 == 0 && i %5 == 0){
//         console.log("The number", i,"FizzBuzz");
//     }
//     else if(i%3 == 0 ){
//         console.log("The number",i,"Fizz");
//     }
//     else if(i%5 == 0){
//         console.log("The number",i,"Buzz");
//     }
//     else{
//         console.log("Oh no!")
//     }
// }

let numArray = [3,6,9,12,15,18,21,24,27,30];
let largerNum = 0;

function greatestvalue(numArray){
    for (let i = 0; i < numArray.length; i++){
        if(numArray[i] > largerNum){
            largerNum = numArray[i]
        }
    }
    return largerNum;
};

console.log(greatestvalue(numArray));
const array1 = [1,3,5,7];
console.log(Math.max(...array1));
console.log(Math.max(4,6,8));