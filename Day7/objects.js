// object literals
// 1. created an oject literal representing a person
const person = {
    firstName:"Matt",
    lastName: "Moser",
    age: 21,
    hobbies: ["Sleeping","Running","Sleeping","Working"],
    data: [true,false,2,0,],
    greet: function(){
        console.log("Hi!, my name is "+ person.firstName +" "+ this.lastName+'. I like '+this.hobbies[0]+', '+this.hobbies[1]+', '+this.hobbies[3]);
    }

}

person.greet(firstName="Jack");

// modifying object properties
person.lastName = "Smith";
console.log(person.lastName);

// adding properties
person.nationality = "American";
console.log(person.nationality);

// adding new methods
person.introduce = function(){
    console.log("I'm "+ person.firstName +" "+ person.lastName+'.')
};

person.introduce()

// Nesting objects
const address = {
    street: "123 Main St.",
    city: "New York",
    country: "USA",
};

person.address = address
console.log(person.address);
console.log(person.address.street);

// using object destructuring to extract properties
// const { firstName, lastName, age} = person;
// console.log(firstName, lastName, age);
