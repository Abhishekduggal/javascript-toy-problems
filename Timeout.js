function log(m) {
  console.log("Hi");
  clearInterval(timmy);
}

setTimeout(log, 2000, "Abhishek");

let abhi = setTimeout(log, 2000, "Abhishek", 12, true);
clearTimeout(abhi);

let timmy = setInterval(log, 500, "Good Bye");

const object1 = {
  property1: 42
};

const desc = Object.getOwnPropertyDescriptor(object1, "property1");

console.log(desc.configurable);
// expected output: true

console.log(desc.value);
// expected output: 42
