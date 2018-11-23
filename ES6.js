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
