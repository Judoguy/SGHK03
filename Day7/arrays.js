console.log(4);
let fruits = ['apple', 'banana','orange','mango'];
console.log(fruits);

// accessing elements in arrays
console.log('First fruit: ', fruits[0]);
console.log('Third fruit: ', fruits[2]);
console.log('Last fruit: ', fruits[fruits.length - 1]);

//modifying arrays
console.log('Second fruit: ', fruits[1]);
fruits[1] = 'grapes'
console.log('Second fruit: ', fruits[1]);

fruits.push('peach');
console.log(fruits);
fruits.pop();
console.log(fruits);

//iteration
let vegetables = ['cabbage','carrot','cumcumber','tomato']

for (let i = 0; i < vegetables.length; i++){
    console.log('vegetables: ', vegetables[i])
}
// for each must use a function
let colors = ['red', 'blue', 'green', 'yellow'];
colors.forEach(function (color){
    console.log('color: ', color);
})
// common array methods
colors = ['red', 'blue', 'green', 'yellow'];
console.log('Array Length; ',colors.length)

// indexOf 
console.log('Index of green', colors.indexOf('green'));

// includes
console.log('Includes yellow: ', colors.includes('yellow'));
console.log('Includes yellow: ', colors.includes('cyan'));

// join

console.log('Joined array: ', colors.join('-'))

// slice does not mutate the original array
let slicedArray = colors.slice(1,3);
console.log("Sliced Array: ",slicedArray);
console.log("Colors array: ", colors);

// splice mutates the original array
let removedElements = colors.splice(0,2);
console.log("Sliced array :", removedElements)
console.log("New Colors array: ", colors);
