console.log("DOM");

//Accessing elements
// by classname
const heading1 = document.getElementsByClassName("heading1");
console.log(heading1);

// by ID
const heading = document.getElementById("heading");
console.log(heading);

// tagname
const heading2 = document.getElementsByTagName("h2");
console.log(heading2);

// by queryselectorall
const listItems = document.querySelectorAll("#list li");
console.log(listItems)

// Modifying Elements
// innerHTML

heading1[0].innerHTML = "<h6>Learning DOM Manipulation</h6>"

// text content
heading2[0].textContent = "Element Manipulation" // can not access the inner HTML such as <h4> etc...

// setting attributes
heading1[0].setAttribute("class", "highlight")

// changing style property
const button = document.getElementById("btn")
button.style.backgroundColor = "red"

// create elements
const container = document.getElementsByClassName('container');
const newParagraph = document.createElement("p");
newParagraph.textContent = "THis is a new paragraph from the js";

container[0].appendChild(newParagraph);
/*
listItems[0].innerHTML = 'Was an item'
listItems[1].innerHTML = '<h4>WOW!</h4>'
listItems[2].textContent = "thing 11!"


// remove an element
const elementToRemove = document.querySelector("li");
elementToRemove.remove()
console.log("Removed Element: ", elementToRemove)

const second = document.getElementById("list")
second.removeChild(second.children[2])
*/
// handing Events
button.addEventListener("click",addListItem)

function addListItem(){
    const newListItem = document.createElement('li');
    newListItem.textContent = "Another task";

    document.getElementById("list").appendChild(newListItem);
}