var names = ["Alexandria", "Matthew", "Joe"];

names.every(function(name) {
  return name.length > 4;
});

names.some(function(name) {
  return name.length > 4;
});

var requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" }
];

var inProgress;

inProgress = requests.some(function(request) {
  return request.status === "pending";
});

// Balance parnethesis using Reduce Helper function

function checkPattern(str) {
  return !str.split("").reduce(function(acc, char) {
    if (acc < 0) {
      return acc;
    }
    if (acc === "(") {
      return ++acc;
    }
    if (acc === ")") {
      return --acc;
    }

    return acc;
  }, 0);
}
checkPattern("(()((())))");

// Distance Travelled

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance;

totalDistance = trips.reduce(function(sum, trip) {
  return sum + trip.distance;
}, 0);

function unique(array) {
  let output = new Set(array);
  console.log(output);
}

unique([1, 1, 2, 3, 4, 4]);

// Your task is to write function toLeetSpeak that converts a regular english sentence to Leetspeak.

// More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

// For example:

// toLeetSpeak("LEET") returns "1337"
// In this kata we use a simple LeetSpeak dialect. Use this alphabet:

// {
//   A : '@',  B : '8',  C : '(',  D : 'D',  E : '3',  F : 'F',  G : '6',  H : '#',
//   I : '!',  J : 'J',  K : 'K',  L : '1',  M : 'M',  N : 'N',  O : '0',  P : 'P',
//   Q : 'Q',  R : 'R',  S : '$',  T : '7',  U : 'U',  V : 'V',  W : 'W',  X : 'X',
//   Y : 'Y',  Z : '2'
// }
//http://www.codewars.com/kata/toleetspeak

// function toLeetSpeak(str){
// let arrStr = str.split('');
const leet = {
  A: "@",
  B: "8",
  C: "(",
  D: "D",
  E: "3",
  F: "F",
  G: "6",
  H: "#",
  I: "!",
  J: "J",
  K: "K",
  L: "1",
  M: "M",
  N: "N",
  O: "0",
  P: "P",
  Q: "Q",
  R: "R",
  S: "$",
  T: "7",
  U: "U",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",
  Z: "2"
};
// console.log(arrStr)
// const arrLeet = Object.entries(leet);
// console.log(arrLeet)
// console.log(arrLeet.find(a => arrStr))
// }

const toLeetSpeak = str =>
  str
    .split("")
    .map(e => leet[e])
    .join("");

toLeetSpeak("LEET");

// Write a function to square every digit of an integer.

function squareEveryNum(int) {
  let arr = (int + "").split("");
  // console.log(arr)

  let squareArr = arr.map(num => num * num);
  // console.log(squareArr);

  return parseInt(squareArr.join(""), 10);

  // (return +squareArr.join(''),10)
  // +converts string into number!!!!!
}

// For example:
// squareEveryNum(9119) // ==> 811181
squareEveryNum(4232); //==> 16494

// Note: The function should accept an integer and return an integer

// Count down 3 times to an positive integer n, return these 3 numbers as a string, separated by exclamation marks.
// Code Limit: 30 Characters

// Example
// n = 1  // ==>  "3!2!1"
//n = 10  //==>  "12!11!10"
// n = 100 //==>  "102!101!100"

function countdown(n) {
  //30 Character solution goes here
  let arrN = [n];
  // let addN = [n+1, n+2];
  arrN.push(n + 1, n + 2);
  // arrN.push(...addN);
  console.log(arrN);

  return arrN.reverse().join("!");
}

countdown(10);

var dolly = ["Dolly", "sheep", []];
var dollyClone = cloneAnimal(dolly);

function cloneAnimal(animal) {
  var animalClone = animal.slice();

  animal[0] += "Clone";
  animalClone[2] = animal[0];
  return animalClone;
}

//console.log(dollyClone);

// dolly[0] = "Dolly";
// dolly[2].push("DollyClone");

console.log(dollyClone);

console.log(dolly);
