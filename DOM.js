// DOM Traversing
let check = document.querySelector("#main");

//Parent node of the tags
console.log(check.parentNode);
console.log(check.parentNode.parentNode);
console.log(check.parentNode.parentNode.parentNode);

console.log(check.parentNode.parentNode.parentElement);

// Parent node and Parent Element is the same thing

console.log(check.childNodes); //This takes into account the white space and created a text nodes

console.log(check.children);
console.log(check.children[1]);
check.children[1].style.backgroundColor = "yellow";

console.log(check.firstChild);
console.log(check.lastChild);

console.log(check.firstElementChild); // Preferred grabs the first element in the DOM
console.log(check.lastElementChild); // Preferred grabs the first element in the DOM

//next sibling

console.log(check.nextSibling);
console.log(check.previousSibling);

console.log(check.nextElementSibling); // Preferred grabs the next sibling element in the DOM
console.log(check.previousElementSibling); // Preferred grabs the previous sibling element in the DOM
