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

// practice

function unformatted() {
  function innerFunction(count) {
    while (count > 0) {
      count--;
      if (count === 2) {
        console.log("count is two!");
      }
    }
    console.log("are we still in the inner func?");
  }
  innerFunction(5);
  return "end of the func";
}

unformatted();

// practice

function aFunction(num) {
  for (var i = 0; i < num; i++) {
    if (i % 2 === 0) {
      console.log("is even!");
    } else {
      console.log("is odd!");
    }
    console.log("current number is ", i);
  }
}

aFunction(3);

// practice

function lifeChangingMagic(
  inspirationalQuote,
  thingsIWillNeverDo,
  limerickLines
) {
  // prints a line break
  function printLineBreak() {
    console.log();
    console.log();
    console.log("---");
    console.log();
    console.log();
  }
  console.log();
  {
    console.log("/*");
    for (var i = 0; i < 5; i++) {
      console.log(inspirationalQuote);
    }

    printLineBreak();

    for (var k = 0; k < limerickLines.length; k++) {
      console.log(limerickLines[k]);
    }
  }

  printLineBreak();

  var iWillNeverDoOutput =
    "I would sooner drive a nail through my computer than";
  iWillNeverDoOutput += " " + thingsIWillNeverDo.join(" or ") + ".";
  console.log(iWillNeverDoOutput);
  console.log("/*");
}

var inspirationalQuote = "My code is tidy code, and it is beautiful.";

var thingsIWillNeverDo = [
  "not indent my code properly",
  'use unhelpful variable names, like "x" or "a"'
];

var limerickLines = [
  "I always indent as I'm typing",
  "To do otherwise would be frightening!",
  "  Only then can this ode",
  "  to beautiful code",
  "apply to the lines I am writing!"
];

lifeChangingMagic(inspirationalQuote, thingsIWillNeverDo, limerickLines);

// Practice

function mostVowels(str) {
  var newStr = str.split(" ");
  console.log(newStr);

  for (var i = 0; i < newStr.length; i++) {}
}
mostVowels("I am a keeper with some real rhythms");
// => "keeper"

// Practice

// groupBy takes an array and splits it into sets, grouped by the
// result of running each value through the predicate. If the
// predicate is a string instead of a function, it groups by the
// property named by predicate on each of the values.

// function groupBy(collection, predicate){
//   // pseudocode begins here:
//     // Depending on the second parameter function / string /
//     // what are we doing here?
//     // function - call the function and pass each item
//       // store it in a variable
//       // They will will be key for the object
//       // Value will be the item that we are at the iteration of the loop

//       // check the key alreay exist in the object
//         // If it does we have to add,

//   // Key
//   //& value (array)

//   // return the new object

//   //var temp = [];

//   var key = [];
//   var result = {};
//   // Iterate over the array, using forEach

//       //console.log('Iterate Item', item);

//     if(typeof predicate === 'function'){
//         collection.forEach(function(item){
//           if(result[predicate(item)]){
//             result[predicate(item)].push(item);
//           }else{
//             result[predicate(item)] = item;
//           }
//         });

//     }else if(typeof predicate === 'string'){
//         collection.forEach(function(item){

//         });
//       }

//   return result;
//   //console.log('output', result);
// }

//   // if (typeof(predicate) === "function") {
//   //   for(let i = 0; i<collection.length; i++){
//   //     if (output[predicate(collection[i])]){
//   //       output[predicate(collection[i])].push(collection[i])

//   //     } else {
//   //       output[predicate(collection[i])] = [collection[i]]
//   //     }
//   //   }

function groupBy(collection, predicate) {
  // pseudocode begins here:
  // Depending on the second parameter function / string /
  // what are we doing here?
  // function - call the function and pass each item
  // store it in a variable
  // They will will be key for the object
  // Value will be the item that we are at the iteration of the loop

  // check the key alreay exist in the object
  // If it does we have to add,

  // Key
  //& value (array)

  // return the new object
  // function groupBy(collection, predicate){
  var result = {};
  //var temp = [];
  //var key = [];

  if (typeof predicate === "function") {
    // Iterate over the array, using forEach
    //console.log(predicate);
    collection.forEach(function(item) {
      if (result[predicate(item)]) {
        result[predicate(item)].push(item);
      } else {
        result[predicate(item)] = [item];
      }
    });
  }

  if (typeof predicate === "string") {
    collection.forEach(function(item) {
      if (result[item[predicate]]) {
        result[item[predicate]].push(item);
      } else {
        result[item[predicate]] = [item];
      }
    });
  }
  //console.log('output', output);
  return result;

  //   collection.forEach(function(item){
  //     //console.log('Iterate Item', item);

  //     if(typeof predicate === 'function'){

  //       if(typeof item === 'string'){
  //

  //           //console.log(key);
  //           key = firstLetter(item);
  //           output[key] = item;
  //

  //       } else if (typeof item === 'number'){
  //           //console.log('hello world');
  //           key = mathValue(item);
  //           //console.log(key);
  //           output[key] = item;
  //           //console.log('output', output);
  //         }
  //     }else if(typeof predicate === 'string'){
  //       //console.log(item.length);
  //       //console.log(key);
  //       key = item.length;
  //       output[key] = item;
  //       //console.log('output', output);
  //     }
  //   });

  // return output;
  // // //console.log('output', output);
}
var firstLetter = function(word) {
  return word.charAt(0);
};

var mathValue = function(val) {
  return Math.floor(val);
};

console.log(groupBy(["apple", "cat", "boat", "card", "bond"], firstLetter));
// returns { 'a': ['apple'], 'c': ['cat', 'card'], 'b': ['boat', 'bond'] }

console.log(groupBy(["apple", "cat", "boat", "card", "bond"], "length"));
// returns { '5': ['apple'], '4': ['boat', 'card', 'bond'], '3': ['cat'] }

console.log(
  groupBy([1.4, 5.6, 3.6, 1.8, 3.4], function(val) {
    return Math.floor(val);
  })
);

// Practice

// In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Given one side of the DNA, you need to find the complementary side.

// DNAStrand("ATTGC") ==>  "TAACG"
// DNAStrand("GTAT")  ==>  "CATA"

function dna(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      arr.push("T");
    } else if (str[i] === "T") {
      arr.push("A");
    } else if (str[i] === "G") {
      arr.push("C");
    } else if (str[i] === "C") {
      arr.push("G");
    }
  }
  return arr.join("");

  // Array Statement with switch case

  // my code
  /*
  var arr = str.split('');
  var newStr = str.replace(/T/, "A").replace(/A/, "T").replace(/C/, "G").replace(/G/, "C")
  //var 

  console.log(newStr);

  for(var i = 0; i < arr.length; i++){
    if(arr[i] === 'A'){
      arr[i] = 'T'
    }else if (arr[i] === 'T'){
      arr[i] === 'A'
    }else if (arr[i] === 'C'){
      arr[i] === 'G'
    }else if (arr[i] === 'G'){
      arr[i] === 'C'
    }
  }
  console.log(arr);
  return arr.join('');
  // console.log(arr);
  // var newStr;

  // str.replace('A')
  */
}

dna("ATTGC");

// Practice

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

// Note: The function should accept an integer and return an int

// Practice
// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// Practice

var classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true }
    ]
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true }
    ]
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false }
    ]
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true }
    ]
  }
];

function classCheck(day) {
  for (var i = 0; i < classRoom.length; i++) {
    for (var name in classRoom[i]) {
      //console.log(classRoom[i][name]);

      for (value in classRoom[i][name]) {
        if (classRoom[i][name][value][day] === true) {
          console.log([name]);
        }
      }
    }
  }
}

classCheck("Friday"); // => ['Marnie', 'Shoshanna']

// Practice

var classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true }
    ]
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true }
    ]
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false }
    ]
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true }
    ]
  }
];

function classCheck(day) {
  for (var i = 0; i < classRoom.length; i++) {
    for (var name in classRoom[i]) {
      //console.log(classRoom[i][name]);

      for (value in classRoom[i][name]) {
        if (classRoom[i][name][value][day] === true) {
          console.log([name]);
        }
      }
    }
  }
}

classCheck("Friday"); // => ['Marnie', 'Shoshanna']

// Practice

// groupBy takes an array and splits it into sets, grouped by the
// result of running each value through the predicate. If the
// predicate is a string instead of a function, it groups by the
// property named by predicate on each of the values.

// function groupBy(collection, predicate){
//   // pseudocode begins here:
//     // Depending on the second parameter function / string /
//     // what are we doing here?
//     // function - call the function and pass each item
//       // store it in a variable
//       // They will will be key for the object
//       // Value will be the item that we are at the iteration of the loop

//       // check the key alreay exist in the object
//         // If it does we have to add,

//   // Key
//   //& value (array)

//   // return the new object

//   //var temp = [];

//   var key = [];
//   var result = {};
//   // Iterate over the array, using forEach

//       //console.log('Iterate Item', item);

//     if(typeof predicate === 'function'){
//         collection.forEach(function(item){
//           if(result[predicate(item)]){
//             result[predicate(item)].push(item);
//           }else{
//             result[predicate(item)] = item;
//           }
//         });

//     }else if(typeof predicate === 'string'){
//         collection.forEach(function(item){

//         });
//       }

//   return result;
//   //console.log('output', result);
// }

//   // if (typeof(predicate) === "function") {
//   //   for(let i = 0; i<collection.length; i++){
//   //     if (output[predicate(collection[i])]){
//   //       output[predicate(collection[i])].push(collection[i])

//   //     } else {
//   //       output[predicate(collection[i])] = [collection[i]]
//   //     }
//   //   }

function groupBy(collection, predicate) {
  // pseudocode begins here:
  // Depending on the second parameter function / string /
  // what are we doing here?
  // function - call the function and pass each item
  // store it in a variable
  // They will will be key for the object
  // Value will be the item that we are at the iteration of the loop

  // check the key alreay exist in the object
  // If it does we have to add,

  // Key
  //& value (array)

  // return the new object
  // function groupBy(collection, predicate){
  var result = {};
  //var temp = [];
  //var key = [];

  if (typeof predicate === "function") {
    // Iterate over the array, using forEach
    //console.log(predicate);
    collection.forEach(function(item) {
      if (result[predicate(item)]) {
        result[predicate(item)].push(item);
      } else {
        result[predicate(item)] = [item];
      }
    });
  }

  if (typeof predicate === "string") {
    collection.forEach(function(item) {
      if (result[item[predicate]]) {
        result[item[predicate]].push(item);
      } else {
        result[item[predicate]] = [item];
      }
    });
  }
  //console.log('output', output);
  return result;

  //   collection.forEach(function(item){
  //     //console.log('Iterate Item', item);

  //     if(typeof predicate === 'function'){

  //       if(typeof item === 'string'){
  //

  //           //console.log(key);
  //           key = firstLetter(item);
  //           output[key] = item;
  //

  //       } else if (typeof item === 'number'){
  //           //console.log('hello world');
  //           key = mathValue(item);
  //           //console.log(key);
  //           output[key] = item;
  //           //console.log('output', output);
  //         }
  //     }else if(typeof predicate === 'string'){
  //       //console.log(item.length);
  //       //console.log(key);
  //       key = item.length;
  //       output[key] = item;
  //       //console.log('output', output);
  //     }
  //   });

  // return output;
  // // //console.log('output', output);
}
var firstLetter = function(word) {
  return word.charAt(0);
};

var mathValue = function(val) {
  return Math.floor(val);
};

console.log(groupBy(["apple", "cat", "boat", "card", "bond"], firstLetter));
// returns { 'a': ['apple'], 'c': ['cat', 'card'], 'b': ['boat', 'bond'] }

console.log(groupBy(["apple", "cat", "boat", "card", "bond"], "length"));
// returns { '5': ['apple'], '4': ['boat', 'card', 'bond'], '3': ['cat'] }

console.log(
  groupBy([1.4, 5.6, 3.6, 1.8, 3.4], function(val) {
    return Math.floor(val);
  })
);
