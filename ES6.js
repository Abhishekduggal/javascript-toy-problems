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

// Practice

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Code here
var users = [
  {
    id: "12d",
    email: "tyler@gmail.com",
    name: "Tyler",
    address: "167 East 500 North"
  },
  {
    id: "15a",
    email: "cahlan@gmail.com",
    name: "Cahlan",
    address: "135 East 320 North"
  },
  {
    id: "16t",
    email: "ryan@gmail.com",
    name: "Ryan",
    address: "192 East 32 North"
  }
];

function getUserById(users, id, cb) {
  //console.log(users);
  console.log(users[0].id);
  for (let i = 0; i < users.length; i++) {
    //console.log(users[i].id);
    if (users[i].id === id) {
      return cb(users[i]);
    }
  }
}
// Do not edit the code below.

getUserById(users, "16t", function(user) {
  console.log(
    "The user with the id 16t has the email of " +
      user.email +
      " the name of " +
      user.name +
      " and the address of " +
      user.address
  );
});
// Do not edit the code above.

// Practice

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Code here
var users = [
  {
    id: "12d",
    email: "tyler@gmail.com",
    name: "Tyler",
    address: "167 East 500 North"
  },
  {
    id: "15a",
    email: "cahlan@gmail.com",
    name: "Cahlan",
    address: "135 East 320 North"
  },
  {
    id: "16t",
    email: "ryan@gmail.com",
    name: "Ryan",
    address: "192 East 32 North"
  }
];

function getUserById(users, id, cb) {
  //console.log(users);
  console.log(users[0].id);
  for (let i = 0; i < users.length; i++) {
    //console.log(users[i].id);
    if (users[i].id === id) {
      return cb(users[i]);
    }
  }
}
// Do not edit the code below.

getUserById(users, "16t", function(user) {
  console.log(
    "The user with the id 16t has the email of " +
      user.email +
      " the name of " +
      user.name +
      " and the address of " +
      user.address
  );
});
// Do not edit the code above.

// Practice

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Code here
var users = [
  {
    id: "12d",
    email: "tyler@gmail.com",
    name: "Tyler",
    address: "167 East 500 North"
  },
  {
    id: "15a",
    email: "cahlan@gmail.com",
    name: "Cahlan",
    address: "135 East 320 North"
  },
  {
    id: "16t",
    email: "ryan@gmail.com",
    name: "Ryan",
    address: "192 East 32 North"
  }
];

function getUserById(users, id, cb) {
  //console.log(users);
  console.log(users[0].id);
  for (let i = 0; i < users.length; i++) {
    //console.log(users[i].id);
    if (users[i].id === id) {
      return cb(users[i]);
    }
  }
}
// Do not edit the code below.

getUserById(users, "16t", function(user) {
  console.log(
    "The user with the id 16t has the email of " +
      user.email +
      " the name of " +
      user.name +
      " and the address of " +
      user.address
  );
});
// Do not edit the code above.

// Practice

// forEach helper array Function

//Below code to refactor using forEach();

function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" }
  ];

  // for (var i = 0; i < posts.length; i++) {
  //   savePost(posts[i]);
  // }

  posts.forEach(function(post) {
    savePost(post);
  });
}

// Practice

/* 

An isogram is a word that has no repeating letters, consecutive or nonconsecutive. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram". Assume all inputs will be lowercase.

For example:
console.log(isIsogram('algorithm')); // returns true
console.log(isIsogram('do the max')); // returns false (multiple spaces)
console.log(isIsogram('hello there')); // returns false (multiple l's)

*/

function isIsogram(str) {
  // split the alphabets
  // for loop
  // if / else

  var split = str.split("");

  var track = [];
  //console.log(split);

  for (var i = 0; i < split.length; i++) {
    //str.indexOf(searchValue[, fromIndex])]

    //console.log(track);
    //console.log(track.indexOf(split[i]));
    if (track.indexOf(split[i]) > -1) {
      return false;
    }
    track.push(split[i]);
  }
  return true;
}

console.log(isIsogram("algorithm"));
console.log(isIsogram("do the max"));

// Practice

// Your task is to create an array of size n with the values of the Fibonnaci sequence, and reverse the order in which the sequence is displayed.

// For example: [1, 1, 2, 3, 5] would become [5, 3, 2, 1, 1]

// You can assume that n will always be a positive integer between and including, 1 and 64.

// pseduo code!
// define a function that takes in a number
// looping through
// Create an array and loop through it
// check the number before and two numbers before and add them
// reverse my array

function fibonnaci(n) {
  //let newNum - n-1;
  let newArr = [];

  for (let i = 0; i < n; i++) {
    console.log(newArr, newArr[i - 1], newArr[i - 2]);

    newArr.push((newArr[i - 1] || 1) + (newArr[i - 2] || 0));
  }

  console.log(newArr);

  return newArr.reverse();
}

fibonnaci(10);

//     console.log(n);
//     //result.push(n, );
//   if(n < 65) {
//     //console.log(n);
//     return n
//   }
//     return (sequence(n-1)+sequence(n-2))

//   //return result//.reverse();

// }

// sequence(5

// Practice

// Write a function that rearranges an integer into its largest possible value.
function superSize(int) {
  const n = int;
  let z = Array.from(n.toString()).map(Number);
  //console.log(z);
  let y = z.sort(function(a, b) {
    return b - a;
  });
  console.log(y);
}
superSize(123456); //654321
//superSize(105) // 510
//superSize(12) // 21
// If the argument passed through is single digit or is already the maximum possible integer, your function should s

// Practice

// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// Practice

// const user = {
//   name: 'abhishek',
//   sayName() {
//     return this.name;
//   }
// }

// // Implicit Binding
// user.sayName();

// function sayName(){
//   return this.name;
// }
// const user = {
//   name: 'abhishek',
//   sayName: sayName
// }

// const user2 = {
//   name: 'Jeff',
//   sayJeff: sayName
// }
// // user.sayName();

// user2.sayJeff();

//Implicit Binding

//Explicit Binding

// function drive(){
//   return this.miles += 1;
// }

// const grandNational = {
//   make: 'Buick',
//   model: 'Grand National',
//   year: "'87",
//   miles: 0
// }

// const x5m = {
//   make: 'BMW',
//   model: 'X5M',
//   year: "2018",
//   miles: 0
// }

// drive.call(x5m,,,,);
// drive.apply(x5m, [,,,,]);

// const driveNational = drive.bind(grandNational);

// const driveBeemer = drive.bind(x5m);

// driveNational();
// driveNational();
// driveBeemer();

// Object Factory (Like action creators)
// function createCar(make, model, year){
//   return {
//     make: make,
//     model: model,
//     year: year
//   }
// }

//Constructor functions
// function Car(make, model, year){
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.miles = 0;
//   this.drive = function () {
//     return this.miles += 1;
//   }
// }

// const mustang = new Car('Ford', 'Mustang', 2001);

// console.log(mustang)

// Practice

// Description:

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null/NULL.

//384,400 km to the moon

//https://www.codewars.com/kata/folding-your-way-to-the-moon

// write a function that takes in a number
//make a counter for paper folds
// check if number is positive else return null
// increment counter as we make folds
// return our counter

function foldsToTheMoon(distance) {
  let counter = 0;
  if (distance <= 0) {
    return null;
  }

  for (let i = 0.0001; i < distance; i += i) {
    counter++;
  }
  return counter;
}

foldsToTheMoon(384400000);

// function distanceToMoon(thickness){
// // let paperThickness = thickness*0.001
// // console.log(paperThickness)
// let moon = 384400 * 1000
// let result = 0;

// if(thickness < 0){
//   return 'NULL';
// }else {
//   result = moon/(thickness)*2
// }
// console.log(result);
// }

// distanceToMoon(0.0001);

// Practice

// Description:

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null/NULL.

//384,400 km to the moon

//https://www.codewars.com/kata/folding-your-way-to-the-moon

// write a function that takes in a number
//make a counter for paper folds
// check if number is positive else return null
// increment counter as we make folds
// return our counter

function foldsToTheMoon(distance) {
  let counter = 0;
  if (distance <= 0) {
    return null;
  }

  for (let i = 0.0001; i < distance; i += i) {
    counter++;
  }
  return counter;
}

foldsToTheMoon(384400000);

// function distanceToMoon(thickness){
// // let paperThickness = thickness*0.001
// // console.log(paperThickness)
// let moon = 384400 * 1000
// let result = 0;

// if(thickness < 0){
//   return 'NULL';
// }else {
//   result = moon/(thickness)*2
// }
// console.log(result);
// }

// distanceToMoon(

// Hash Table Practice

function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}
HashTable.prototype.hash = function(key) {
  var total = 0;

  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
};

HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    var currentNode = this.buckets[index];

    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return; // exit the while loop
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    var currentNode = this.buckets[index];

    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return; // exit the while loop
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.retrieveAll = function() {
  var allNodes = [];

  for (var i = 0; i < this.numBuckets; i++) {
    var currentNode = this.buckets[i];

    while (currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return allNodes;
};
var myHT = new HashTable(30);
console.log(myHT);

myHT.insert("Dean", "dean@gmail.com");
myHT.insert("Megan", "megan@gmail.com");
myHT.insert("Dane", "danen@yahoo.com");
myHT.insert("Dean", "deanmachine@gmail.com");
myHT.insert("Megan", "megansmith@gmail.com");
myHT.insert("Dane", "dane1010@outlook.com");
myHT.insert("Joe", "joe@gmail.com");
myHT.insert("Samantha", "sami@twitter.com");

//console.log(myHT.hash('Becca'));

// console.log(myHT.buckets);

// console.log(myHT.get('Megan'));

console.log(myHT.retrieveAll());

// Practice

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  var copy = ages;

  //console.log(copy);

  var output = [];

  copy.sort(function(a, b) {
    return a - b;
  });

  console.log(copy);

  output = copy.slice(copy.length - 2, copy.length);

  console.log(output);
}

// var oldest1 = ages[0];
// var oldest2 = ages[1];

// ages.forEach(function(age){
//   if(age > oldest1){
//     oldest1 = age
//   }
//   console.log(age);

// });

twoOldestAges([1, 2, 10, 8, 32, 44, 45, 66]); // should return [8, 10];

// Problem

function assignEvenAndOdds(userInput) {
  // var arr = userInput.split(',');
  var arr = [];
  console.log(arr);
  var evens = [];
  var odds = [];

  userInput.filter(num => {
    if (parseInt(num) % 2 === 0) {
      evens.push(num);
    } else if (parseInt(num) % 2 !== 0) {
      odds.push(num);
    }
  });
  console.log(evens);
  console.log(odds);
}
assignEvenAndOdds(["1", "2", "3", "4"]);

// Problem

// write a function that translates english to pig-latin
// 'truck' would be 'rucktay'
// 'igloo' would be 'iglooway'

// for a more advanced problem write a function that works with multiple words in a string:
// 'hello friend' would be 'ellohay iendfray'
// 'i live in the igloo' would be 'iway ivelay inway hetay iglooway'

function translate(str) {
  var arr = str.split("");
  var vowel = /[aeiou]/;

  if (vowel.test(arr[0])) {
    return `${str}way`;
  }

  while (true) {
    if (!vowel.test(arr[0])) {
      arr.push(arr.splice(0, 1));
    } else if (vowel.test(arr[0])) {
      break;
    }
  }
  // for(var i = 0; i<arr.length; i++){
  //   console.log(arr[i])
  //   if(str[0] === 't'){
  //     arr.splice(i,0);
  //   }
  // }
  //console.log(arr);
  return arr.join("") + "ay";
}

translate("truck");
//translate('igloo');

// Practice

// Are the numbers in order?

// In this Kata, your function receives an array of positive integers as input. Your task is to determine whether the numbers are in ascending order.

// For the purposes of this Kata, you may assume that all inputs are valid (i.e. arrays containing only positive integers with a length of at least 2).

function inAscOrder(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    // if(arr[i] < arr[i - 1])
    if (first > arr[i]) {
      return false;
    } else {
      first = arr[i];
      //console.log(i);
    }
  }
  return true;
}
// For example:

//inAscOrder([1,2,4,7,19]); // returns true
//inAscOrder([1,2,3,4,5]); // returns true
//inAscOrder([1,6,10,18,2,4,20]); // returns false
//inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING o



// Practice

(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    return val; 
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    return n === undefined ? array[array.length-1] : array.slice(0, array.length-n);
    
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
   
   if(Array.isArray(collection)){
     
     for(var i = 0; i < collection.length; i++) {
       iterator(collection[i], key, collection);
     }
   } else {
     for (var key in collection) {
       iterator(collection[key], key, collection);
     }
   }
    
  };
  
  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
    var results = [];
    _.each (collection, function(value){
      if( test(value) ) {
        results.push(value);
      }
      return results;
    });
  };  
  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    // TIP: see if you can re-use _.filter() here, without simply
    // copying code in and modifying it
    return _.filter(collection, function(value) {
      return !test(value);
    });
  };
  // Produce a duplicate-free version of the array.

  // var numbers = [1, 2, 1, 3, 1, 4];
  //expect(_.uniq(numbers)).to.eql([1, 2, 3, 4]);

  _.uniq = function(array, isSorted, iterator) {
    
    var unique =   {}, results[];
    
    for(var i = 0; i < array.length; i++) {
      unique[array[i]] = array[i];
    }
    for (var key in collection){
      results.push(unique[key]);
    }
    return results;
  };
  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    var results = [];
    _.each(collection, function(value,key,collection) {
      results.push(iterator(value,key,collection));
    });
    return results;
  };
  
  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    return _.map(collection, function(item){
      return item[key];
    });
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //  
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //  
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //  
  //   var identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // should be 5, regardless of the iterator function passed in
  //          No accumulator is given so the first element is used.
  _.reduce = function(collection, iterator, accumulator) {
    var initializing = arguments.length === 2;
    
    _.each(collection, function(value){
      if(initializing) {
        accumulator = value;
        initializing = false;
      } else {
    accumulator = iterator(accumulator,value);
      }
    )};
  };
  
  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

 // Determine whether all of the elements match a truth test.
 _.every = function(collection, iterator) {
  // TIP: Try re-using reduce() here.
  
  iterator = iterator || _.identity();
  return !!_.reduce(collection, function (trueSoFar, value){
    return trueSoFar && iterator(value);
  }, true);
};

// Determine whether any of the elements pass a truth test. If no iterator is
// provided, provide a default one
_.some = function(collection, iterator) {
  // TIP: There's a very clever way to re-use every() here.
iterator = iterator || _.identity();
  return !!_.reduce(collection, function (trueSoFar, value){
    return trueSoFar || iterator(value);
  }, false);
};

/**
 * OBJECTS
 * =======
 *
 * In this section, we'll look at a couple of helpers for merging objects.
 */

// Extend a given object with all the properties of the passed in
// object(s).
//
// Example:
//   var obj1 = {key1: "something"};
//   _.extend(obj1, {
//     key2: "something new",
//     key3: "something else new"
//   }, {
//     bla: "even more stuff"
//   }); // obj1 now contains key1, key2, key3 and bla
_.extend = function(obj) {
  
  //arguments[0] = obj; Lookup "arguments"
  
  _.each(arguments, function(source){
    _.each(source, function(value, key){
      obj[key] = value;
    })
  });
  return obj;
};
// Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
    _.each(arguments, function(source){
        _.each(source, function(value, key){
          obj[key] === undefined && (obj[key] = value);
        })
      });
      return obj;  
      
    }; 
    
    /**
     * FUNCTIONS
     * =========
     *
     * Now we're getting into function decorators, which take in any function
     * and return out a new version of the function that works somewhat differently
     */
  
    // Return a function that can be called at most one time. Subsequent calls
    // should return the previously returned value.
    _.once = function(func) {
      // TIP: These variables are stored in a "closure scope" (worth researching),
      // so that they'll remain available to the newly-generated function every
      // time it's called.
      var alreadyCalled = false;
      var result;
  
      // TIP: We'll return a new function that delegates to the old one, but only
      // if it hasn't been called before.
      return function() {
        if (!alreadyCalled) {
          // TIP: .apply(this, arguments) is the standard way to pass on all of the
          // infromation from one function call to another.
          result = func.apply(this, arguments);
          alreadyCalled = true;
        }
        // The new function always returns the originally computed result.
        return result;
      };
    };

// Memorize an expensive function's results by storing them. You may assume
  // that the function only takes primitives as arguments.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    
    var results = {};
    
    return (function()){
      
      var arg = JSON.stringify(arguments);  
      if(!results[arg] ) {
        
        results[arg] = func.call(this,arguments);
      }
      return results[arg];
    };
  }
  // return a function when called, is going to wait for wait amount
  // of time and then invoke func. 
  
  _.delay = function(func, wait) {
  
  var args1 = [].slice.call(arguments,2);
  
  return function(){
    var args2 = [].slice.call(arguments);
    setTimeout(function(){
   func.apply(this, args1.concat(args2)); 
  }, wait);
    };
  }())


// Problem

class Puppy {

  constructor(happiness, energy, behavior) {
    this.happiness = happiness;
    this.energy = energy;
    this.behavior = behavior;
  }

  // code here
  getsTreat(parm){
    return this.happiness+20;
  }
  
  takesNap(parm){
    var energy = this.energy - 45;
    var beh = this.behavior + 15;
    var happy = this.happiness;
    return [happy, energy, beh];
  }

}

var Charles = new Puppy(75, 25, 30)
Charles.takesNap()

// PRactice

// https://www.codewars.com/kata/sort-an-array-by-value-and-index/train/javascript

// Your task is to sort an array of integer numbers by the product of the value and the index of the positions. 

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers. 

// Example:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
// 2 =>  2 * 2 = 4   -> Output-Pos 1
// 3 =>  3 * 3 = 9   -> Output-Pos 2
// 4 =>  4 * 4 = 16  -> Output-Pos 3
// 5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

function sort (arr){
  let obj = {};

  let newArr = arr.map((el,i) => {
    obj[el*(i+1)]=el;
    console.log(obj)
    });
  //console.log(newArr)
  return Object.values(obj);

}

sort([23,2,3,4,5])

//Practice

// // let arr = [1,2,3,4,5,4,3,2,1];

// // let product = arr.reduce(function(total, elem){
// // console.log(total, elem)
// //   return total * elem
// // })

// // product

// let customers = [
//   {name: "Shea", total: 150, message: 'This '},
//   {name: 'Jarid', total: 1, message: 'is '},
//   {name: 'Joe', total: 10000, message: 'a new '},
//   {name: 'Erik', total: -100, message: 'message.'}
// ]

// // let total = customers.reduce( function(total, elem){
// //   return total + elem.total; 
// // }, 0)

// let sentence = customers.reduce(function(total, elem){
//   return total + elem.message;
// }, '')

// sentence


// let dog = {
//   name: 'Rufus',
//   isBad: false,
//   bark: function(){
//     console.log('woof')
//   },
//   age: 77,
//   color: 'Brindle'
// };

// let extension = {
//   isFed: true,
//   size: 'Big',
//   isBad : true
// }
// let newDog = Object.assign({}, dog, extension);
// console.log(dog === newDog);
// console.log(newDog)

// for ( let key in dog ){
//   if (!dog[key]){
//     delete dog[key]
//   }
// }
// for (key in extension){
//   dog[key] = extension[key];
// }
// dog

// let person = {name: "Shea", total: 150, message: 'This '}

// let name = person.name;
// let total = person.total
// let message = person.message;

// let {name, total, message, age} = person;
// console.log(name, total, message, age)

// let  req = {
//   body: {
//     user: {
//       location: {
//         city:
//         state:
//         zip:
//         address:
//       }
//     }
//   }
// }

// let {city, address, zip, state} = req.body.user.location;

// let arr = [1,2,3,4,5];

// let [one, blah, , ,five] = arr;

// console.log(one, blah, five)

// function destructObj ({name}){
//   return name;
// }

// destructObj({name:'Shea'})


// function destructArr([first]){
//   return first;
// }

// destructArr([{name:'Shea'}])

// function addTwo (x, y){
//   return x + y;
// }

// let addTwo2 = (x, y) =>  x + y;  

// let addTwo3 = (x) => x + 2;

// addTwo3(10)

// let arr = [1,2,3,4,5]

// arr.map(elem => {

//   return elem + 2
// }); 

// let person = {
//   name: "Shea",
//   sayName: () => {
//     return this.name;
//   }
// }

// person.sayName()


// function car (make, model, year){
//   return {
//     make, model, year, go: function(){console.log('vroom')}
//   }
// }

// let myCar = car ('Nissan', 'xTerra', 2008)
// // myCar

// function Car (make, model, year){
//   // let this = {make: make, model:model};
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   // return this;
// }

// Car.prototype.go = function(){
//   console.log("vroom")
// }

// let myToyCar = new Car('Triumph', 'Spitfire', 1976);
// console.log(myToyCar)
// console.log(myCar)
// myToyCar.go();






class Car {
  constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  go(){
    console.log('vroom')
  }
  stop(){
    console.log('Squeal!!')
  }
}

class SUV extends Car {
  constructor(make, model, year, offRoad){
    super(make, model, year)
    this.offRoad = offRoad;
  }
  tipOver(){
    console.log('OH NO!!!!')
  }
}
let myCar = new SUV('Nissan', 'xTerra', 2008, true)
myCar.tipOver()
let myToyCar = new Car('Triumph', 'Spitfire', 1976);

 // Spread Operator

 let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9];

let both = [...arr1, ...arr2];
console.log(both);

// Practice

// /*
//   First we'll look at the difference between accessing property values in a for in loop and accessing the property name in a for in loop.
//   In the example below, we are accessing the property values. Uncomment the code below, run it and look at what prints in the console.
// */

// var values = {
//   one: 'These',
//   two: ' are',
//   three: ' the',
//   four: ' property',
//   five: ' values.'
// } 

// for(var key in values) {
//   console.log(values[key])
// }

// /*
//   In this next example, we are accessing the property names themselves. Uncomment the code below, run it and look at what prints in the console.
// */

// for(var key in values) {
//   console.log(key)
// }

// function showValues( obj ) {
//   //Code Here
//   var str = '';

//   for(var prop in obj){
//     str = str + obj[prop]; 
//   }
//   return str;
// }

// // function greaterThan10(obj){
// //   for (var prop in obj){
// //     if(obj[prop] > 10){
// //       console.log(obj[prop])
// //       obj[prop] = 0;
// //     }
// //   }
// //   return obj;
// // }
// // var values = {
// //   one: 5,
// //   two: 12,
// //   three: ' the',
// //   four: ' property',
// //   five: ' values.'
// // }
// // greaterThan10(values);
// // //showValues(values);

// Practice

  // /*
  //   First we'll look at the difference between accessing property values in a for in loop and accessing the property name in a for in loop.
  //   In the example below, we are accessing the property values. Uncomment the code below, run it and look at what prints in the console.
  // */

  // var values = {
  //   one: 'These',
  //   two: ' are',
  //   three: ' the',
  //   four: ' property',
  //   five: ' values.'
  // } 

  // for(var key in values) {
  //   console.log(values[key])
  // }

  // /*
  //   In this next example, we are accessing the property names themselves. Uncomment the code below, run it and look at what prints in the console.
  // */

  // for(var key in values) {
  //   console.log(key)
  // }

  // function showValues( obj ) {
  //   //Code Here
  //   var str = '';

  //   for(var prop in obj){
  //     str = str + obj[prop]; 
  //   }
  //   return str;
  // }

  // // function greaterThan10(obj){
  // //   for (var prop in obj){
  // //     if(obj[prop] > 10){
  // //       console.log(obj[prop])
  // //       obj[prop] = 0;
  // //     }
  // //   }
  // //   return obj;
  // // }
  // // var values = {
  // //   one: 5,
  // //   two: 12,
  // //   three: ' the',
  // //   four: ' property',
  // //   five: ' values.'
  // // }
  // // greaterThan10(values);
  // // //showValues(values);

// // function totalPopulation(obj){

// //   var{utah, california, texas, arizona} = obj;
// //   console.log(utah);
// //   //return (utah.val + california.val + )
// // }

// // var obj = {utah: 10, california: 29087, texas: 82937, arizona: 28347}

// // totalPopulation(obj);

// // Do not edit the code below.
// var employees = [
//   {
//     "firstName": "Von",
//     "lastName": "Budibent",
//     "email": "vbudibent0@163.com",
//     "department": "Sales"
//   },
//   {
//     "firstName": "Catherina",
//     "lastName": "Swalowe",
//     "email": "cswalowe1@example.com",
//     "department": "Engineering"
//   },
//   {
//     "firstName": "Theo",
//     "lastName": "Trill",
//     "email": "ttrill2@sina.com.cn",
//     "department": "Services"
//   },
//   {
//     "firstName": "Elsy",
//     "lastName": "McCrorie",
//     "email": "emccrorie3@netscape.com",
//     "department": "Legal"
//   },
//   {
//     "firstName": "Lorie",
//     "lastName": "Handsheart",
//     "email": "lhandsheart4@fotki.com",
//     "department": "Research and Development"
//   }
// ];
// // Do not edit the code above.

// /*
//   Create a function called 'employeeUpdater' that takes no parameters. employeeUpdater will loop over the array above and perform the following:
//     1. If employee's first name is Theo, remove that employee because he just got fired.
//     2. If the employee's first name is Lorie, change her department to 'HR'.
//     3. Return the updated employee array.
// */

// //Code Here

// // function employeeUpdater() {
// //   // employees.forEach(function(emp) {
// //   //   console.log(emp);
// //   // });
// // var remove = employees.filter(function(employee){
// //   console.log(employee.firstName);
  
// //   if(employee.firstName === 'Lorie'){
// //     employee.department = 'HR';
// //   }
// //   return employee.firstName !== 'Theo';
// //   //console.log(employee);
// // });
// // return remove;
// // }

// // employeeUpdater(employees);


// //Code Here

// function removeDuplicates(){
//   //var arr = [];
//   var dupArr = workplaceAccidents;

//   for(let i = 0; i < dupArr.length; i++){
//     //console.log(dupArr[i]);
//     for(let j = dupArr.length -1; j > i; j--){
//       //console.log(dupArr[j]);
//       if(dupArr[i] === dupArr[j]){
//         dupArr.splice(j,1);
//       }
      
//     }
//   };
//   return dupArr;
// }

// removeDuplicates();


////////// PROBLEM 5 //////////

// Do not edit code below.
// const orders = [{"price":15,"tax":0.09},{"price":42,"tax":0.07},{"price":56,"tax":0.11},
// {"price":80,"tax":0.11},{"price":69,"tax":0.06},{"price":68,"tax":0.14},
// {"price":72,"tax":0.14},{"price":51,"tax":0.09},{"price":89,"tax":0.15},
// {"price":48,"tax":0.13}];
// // Do not edit code above.

// // /*
//   Use a higher order method to get the sum of all the order totals after adding in the sales tax
// // */

// let ordersTotal = orders.map(order => order.price += order.price * order.tax);//console.log(withTax);

// console.log(ordersTotal)
// //Code Here


// function largeNumbers ({first, second, third}) {
//   return Math.min(first,second,third);
// };

// largeNumbers({first: 10, second: 2, third: 90})//).toBe(2)
// var obj = {
//   lion: 3,
//   tiger: 4,
//   bear: 5
// }

// function zooAnimals(obj){
//   var {lion, tiger, bear} = {lion: obj.lion, tiger: obj.tiger, bear: obj.bear};
//   console.l  // /*
  //   First we'll look at the difference between accessing property values in a for in loop and accessing the property name in a for in loop.
  //   In the example below, we are accessing the property values. Uncomment the code below, run it and look at what prints in the console.
  // */

  // var values = {
  //   one: 'These',
  //   two: ' are',
  //   three: ' the',
  //   four: ' property',
  //   five: ' values.'
  // } 

  // for(var key in values) {
  //   console.log(values[key])
  // }

  // /*
  //   In this next example, we are accessing the property names themselves. Uncomment the code below, run it and look at what prints in the console.
  // */

  // for(var key in values) {
  //   console.log(key)
  // }

  // function showValues( obj ) {
  //   //Code Here
  //   var str = '';

  //   for(var prop in obj){
  //     str = str + obj[prop]; 
  //   }
  //   return str;
  // }

  // // function greaterThan10(obj){
  // //   for (var prop in obj){
  // //     if(obj[prop] > 10){
  // //       console.log(obj[prop])
  // //       obj[prop] = 0;
  // //     }
  // //   }
  // //   return obj;
  // // }
  // // var values = {
  // //   one: 5,
  // //   two: 12,
  // //   three: ' the',
  // //   four: ' property',
  // //   five: ' values.'
  // // }
  // // greaterThan10(values);
  // // //showValues(values);

// // function totalPopulation(obj){

// //   var{utah, california, texas, arizona} = obj;
// //   console.log(utah);
// //   //return (utah.val + california.val + )
// // }

// // var obj = {utah: 10, california: 29087, texas: 82937, arizona: 28347}

// // totalPopulation(obj);

// // Do not edit the code below.
// var employees = [
//   {
//     "firstName": "Von",
//     "lastName": "Budibent",
//     "email": "vbudibent0@163.com",
//     "department": "Sales"
//   },
//   {
//     "firstName": "Catherina",
//     "lastName": "Swalowe",
//     "email": "cswalowe1@example.com",
//     "department": "Engineering"
//   },
//   {
//     "firstName": "Theo",
//     "lastName": "Trill",
//     "email": "ttrill2@sina.com.cn",
//     "department": "Services"
//   },
//   {
//     "firstName": "Elsy",
//     "lastName": "McCrorie",
//     "email": "emccrorie3@netscape.com",
//     "department": "Legal"
//   },
//   {
//     "firstName": "Lorie",
//     "lastName": "Handsheart",
//     "email": "lhandsheart4@fotki.com",
//     "department": "Research and Development"
//   }
// ];
// // Do not edit the code above.

// /*
//   Create a function called 'employeeUpdater' that takes no parameters. employeeUpdater will loop over the array above and perform the following:
//     1. If employee's first name is Theo, remove that employee because he just got fired.
//     2. If the employee's first name is Lorie, change her department to 'HR'.
//     3. Return the updated employee array.
// */

// //Code Here

// // function employeeUpdater() {
// //   // employees.forEach(function(emp) {
// //   //   console.log(emp);
// //   // });
// // var remove = employees.filter(function(employee){
// //   console.log(employee.firstName);
  
// //   if(employee.firstName === 'Lorie'){
// //     employee.department = 'HR';
// //   }
// //   return employee.firstName !== 'Theo';
// //   //console.log(employee);
// // });
// // return remove;
// // }

// // employeeUpdater(employees);

// og(obj);
//   return obj;
  
// }
// zooAnimals(obj);

// ////////// PROBLEM 2 //////////

// // Do not edit the code below.
// var workplaceAccidents = [12, 56, 44, 3, 29, 56, 56, 3, 7, 12];
// // Do not edit the code above.

// /*
//   The array above represents IDs tied to reported workplace accidents. 
//   An employee accidentally entered in duplicates to array, making it look as though there are more accidents this year than there actually are.
//     1. Write a function called 'removeDuplicates' that will remove all duplicate entries in the workplaceAccidents array.
//     2. Use nested for loops to check for duplicate numbers, and then remove the duplicates from the array.
//     3. Return the updated array.
// */

// Practice

function binaryToString(binary){


  var newBin = binary.split(" ");
  console.log(newBin);
  var binCode = [];
  
  for (i = 0; i < newBin.length; i++) {
      binCode.push(String.fromCharCode(newBin[i]);
    }
  return binCode.join("");
  
      // // split string into an array so we can loop through it
      // var newStr=binary.split(" ");
      // // declare a new array to later push "translated" values into
      // var sArr=[];
      // // loop through binary array, translate and push translated values into the new array
      // newStr.forEach(function(item){
      // sArr.push(String.fromCharCode(parseInt(item,2)));
      // })
  
      // // join the array back into a string
      // return sArr.join("");
      }
  binaryToString('0b10000110b11000010b1110100'); //== 'Cat'

  // Practice

  // A printer prints colors represented by the letters "a" through "m". At the end of the print, it puts out a control string to show what colors were printed.  A "good" control string output example might be "aaabbbbhaijjjm" due to the fact that only the letters a through m were used, and no errors (other letters) were used.

// When the printer has a malfunction, the control string marks it with a letter that isn't a through m, for example: "aaaxbbbbyyhwawiwjjjwwm".

// Write a function, printer_error, which will output the error rate of the printer as a string whose numerator is the number of errors and the denominator the length of the control string. Do not reduce the fraction.


function printer_error (str){
  //console.log(str.length);
  //console.log(str.includes('a'))
  //
  // console.log(str.match(/nopqrstuvwxyz/g));
  // var output = (str.match(/nopqrstuvwxyz/g) || []).length;
  // console.log(output);
  // if(output === false ){
  //   return `0/${str.length}`
  // }else {
  //   return `${output}/${str.length}`
  // }
// charCodeAt ===== 97-109 are ok

  let denom = str.length;
  let errorsLength = str.split('').filter(elem => {
    return elem.charCodeAt() > 109 || elem.charCodeAt() < 97
  }).length

//console.log(errorsLength)

return `${errorsLength}/${denom}`
}


// For example:
//printer_error("aaabbbbhaijjjm") //==> "0/14"
printer_error("aaaxbbbbyyhwawiwjjjwwm") //==> "8/22"

// Practice

function unformatted() {
  function innerFunction(count) {
    while(count > 0) {
      count--;
        if(count===2) {
          console.log("count is two!");
        }
    }
    console.log("are we still in the inner func?");
  } 
  innerFunction(5);
  return "end of the func";
}


unformatted();

// Practice

//myUnshift([1,2,3], 0)    // => [0,1,2,3]

function myUnshift(array, value){
  var array1 = [value];
  
  for(var i = 0; i < array.length; i++){
    //console.log(array[i]);
    
   array1.push(array[i]);
  
  // array.push(value)
    
  }
  
  console.log(array1);
  
  
  
}

myUnshift([1,2,3], 0);


// Practice

// https://www.codewars.com/kata/sort-an-array-by-value-and-index/train/javascript

// Your task is to sort an array of integer numbers by the product of the value and the index of the positions. 

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers. 

// Example:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
// 2 =>  2 * 2 = 4   -> Output-Pos 1
// 3 =>  3 * 3 = 9   -> Output-Pos 2
// 4 =>  4 * 4 = 16  -> Output-Pos 3
// 5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

function sort (arr){
  let obj = {};

  let newArr = arr.map((el,i) => {
    obj[el*(i+1)]=el;
    console.log(obj)
    });
  //console.log(newArr)
  return Object.values(obj);

}

sort([23,2,3,4,5])

// Practice


const _ = require('lodash');

// function addToArray(arr, input) {
// 	arr.push(input);
// 	return arr;
// }

// const arrayWithVal = addToArray([], 'Hello');

// const addedVal = addToArray(arrayWithVal, 'world');

// console.log(addToArray(addToArray(addToArray([], 'World'), 'Hello'), 'Messy'))

// console.log(addedVal);

// const myArr = [1, 2, 3];

// const total = myArr
// 	.map(val => val * 2)
// 	.filter(val => val > 4)
// 	.reduce((acc, cur) => acc + cur);

// console.log(total);

// // const myVar = if (name === 'Steven') {
// //   'Steven'
// // } else {
// //   'John'
// // }

// const myVar = name === 'Steven' ? 'Steven' : 'John';

// const x = () => 7;
// const y = someVal => someVal + 2;

// y(x());

// const _ = {
// 	map() {},
// 	filter() {},
// 	chain() {},
// };

const arr = [1, 2, 3];
const users = [
	{ name: 'Steven', age: 26 },
	{ name: 'Jeff', age: 35 },
	{ name: 'Steven', age: 234 },
];

const nums = { a: 2, b: 3 };

// Object.values(nums).map(val => val * 2);

// const exponent = _.map(arr, val => val * val)
// const userNames = _.map(users, 'age');
// const mapped = _.map(nums, (num) => num + num)

// console.log(mapped);

// const collect = _.union([1, 2, 3], [2, 4, 6], [1, 5, 6]).sort();

// console.log(collect);

// const intersect = _.intersection([1, 2, 3, 5], [1, 4, 5, 6], [1, 2, 5]);

// console.log(intersect);

// const grouped = _.groupBy(users, 'name');

// console.log(Object.entries(grouped));

////////// PROBLEM 5 //////////

// Do not edit code below.
// const orders = [{"price":15,"tax":0.09},{"price":42,"tax":0.07},{"price":56,"tax":0.11},
// {"price":80,"tax":0.11},{"price":69,"tax":0.06},{"price":68,"tax":0.14},
// {"price":72,"tax":0.14},{"price":51,"tax":0.09},{"price":89,"tax":0.15},
// {"price":48,"tax":0.13}];
// // Do not edit code above.

// // /*
//   Use a higher order method to get the sum of all the order totals after adding in the sales tax
// // */

// let ordersTotal = orders.map(order => order.price += order.price * order.tax);//console.log(withTax);

// console.log(ordersTotal)
// //Code Here


// function largeNumbers ({first, second, third}) {
//   return Math.min(first,second,third);
// };

// largeNumbers({first: 10, second: 2, third: 90})//).toBe(2)
// var obj = {
//   lion: 3,
//   tiger: 4,
//   bear: 5
// }

// function zooAnimals(obj){
//   var {lion, tiger, bear} = {lion: obj.lion, tiger: obj.tiger, bear: obj.bear};
//   console.l  // /*
  //   First we'll look at the difference between accessing property values in a for in loop and accessing the property name in a for in loop.
  //   In the example below, we are accessing the property values. Uncomment the code below, run it and look at what prints in the console.
  // */

  // var values = {
  //   one: 'These',
  //   two: ' are',
  //   three: ' the',
  //   four: ' property',
  //   five: ' values.'
  // } 

  // for(var key in values) {
  //   console.log(values[key])
  // }

  // /*
  //   In this next example, we are accessing the property names themselves. Uncomment the code below, run it and look at what prints in the console.
  // */

  // for(var key in values) {
  //   console.log(key)
  // }

  // function showValues( obj ) {
  //   //Code Here
  //   var str = '';

  //   for(var prop in obj){
  //     str = str + obj[prop]; 
  //   }
  //   return str;
  // }

  // // function greaterThan10(obj){
  // //   for (var prop in obj){
  // //     if(obj[prop] > 10){
  // //       console.log(obj[prop])
  // //       obj[prop] = 0;
  // //     }
  // //   }
  // //   return obj;
  // // }
  // // var values = {
  // //   one: 5,
  // //   two: 12,
  // //   three: ' the',
  // //   four: ' property',
  // //   five: ' values.'
  // // }
  // // greaterThan10(values);
  // // //showValues(values);

// // function totalPopulation(obj){

// //   var{utah, california, texas, arizona} = obj;
// //   console.log(utah);
// //   //return (utah.val + california.val + )
// // }

// // var obj = {utah: 10, california: 29087, texas: 82937, arizona: 28347}

// // totalPopulation(obj);

// // Do not edit the code below.
// var employees = [
//   {
//     "firstName": "Von",
//     "lastName": "Budibent",
//     "email": "vbudibent0@163.com",
//     "department": "Sales"
//   },
//   {
//     "firstName": "Catherina",
//     "lastName": "Swalowe",
//     "email": "cswalowe1@example.com",
//     "department": "Engineering"
//   },
//   {
//     "firstName": "Theo",
//     "lastName": "Trill",
//     "email": "ttrill2@sina.com.cn",
//     "department": "Services"
//   },
//   {
//     "firstName": "Elsy",
//     "lastName": "McCrorie",
//     "email": "emccrorie3@netscape.com",
//     "department": "Legal"
//   },
//   {
//     "firstName": "Lorie",
//     "lastName": "Handsheart",
//     "email": "lhandsheart4@fotki.com",
//     "department": "Research and Development"
//   }
// ];
// // Do not edit the code above.

// /*
//   Create a function called 'employeeUpdater' that takes no parameters. employeeUpdater will loop over the array above and perform the following:
//     1. If employee's first name is Theo, remove that employee because he just got fired.
//     2. If the employee's first name is Lorie, change her department to 'HR'.
//     3. Return the updated employee array.
// */

// //Code Here

// // function employeeUpdater() {
// //   // employees.forEach(function(emp) {
// //   //   console.log(emp);
// //   // });
// // var remove = employees.filter(function(employee){
// //   console.log(employee.firstName);
  
// //   if(employee.firstName === 'Lorie'){
// //     employee.department = 'HR';
// //   }
// //   return employee.firstName !== 'Theo';
// //   //console.log(employee);
// // });
// // return remove;
// // }

// // employeeUpdater(employees);

og(obj);
//   return obj;
  
// }
// zooAnimals(obj);

// ////////// PROBLEM 2 //////////

// // Do not edit the code below.
// var workplaceAccidents = [12, 56, 44, 3, 29, 56, 56, 3, 7, 12];
// // Do not edit the code above.

// /*
//   The array above represents IDs tied to reported workplace accidents. 
//   An employee accidentally entered in duplicates to array, making it look as though there are more accidents this year than there actually are.
//     1. Write a function called 'removeDuplicates' that will remove all duplicate entries in the workplaceAccidents array.
//     2. Use nested for loops to check for duplicate numbers, and then remove the duplicates from the array.
//     3. Return the updated array.
// */

// //Code Here

// function removeDuplicates(){
//   //var arr = [];
//   var dupArr = workplaceAccidents;

//   for(let i = 0; i < dupArr.length; i++){
//     //console.log(dupArr[i]);
//     for(let j = dupArr.length -1; j > i; j--){
//       //console.log(dupArr[j]);
//       if(dupArr[i] === dupArr[j]){
//         dupArr.splice(j,1);
//       }
      
//     }
//   };
//   return dupArr;
// }

// removeDuplicates();

// Practice

// String.prototype.grammarPolice = function(str) {
//   var splitStr = str.toLowerCase().split(" ");
//   for (var i = 0; i < this.splitStr.length; i++) {
//     split[i] =
//       splitStr[i].charAt(0).toUpperCase() + this.splitStr[i].substring(1);
//   }
//   return splitStr.join(" ");
// };

// String.grammarPolice('OH HELLO THERE')

// Practice

// let date = new Date().toLocaleDateString()
// let time = new Date().toTimeString().slice(0,8)

// let a = new Date().getFullYear()

// console.log(date)
// console.log(time)
// console.log(a)

// parseFloat('3443.44444').toFixed(2)

// var name= "Joe";
// var age=22;

// var person = Object.assign({name, age})
// person

// "woobie".toUpperCase()

// let lower = 'hello world'
// let upper = lower.charAt(0).toUpperCase() + lower.substr(1);
// console.log(upper)



// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100

// class User {

//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }

// }

// // let user = new User("John");
// // user.sayHi();

// let abhi = new User('Abhi');

// console.log(abhi)

// Practice 
// function counter() {
//   let num = 0;
//   return function () {
//     return num += 1;
//   }
// }

// const counterOne = counter();
// counterOne();
// console.log(counterOne());
// const counterTwo = counter();
// console.log(counterTwo());

const stevensRegularOrder = ['Ham', 'BP', 'BananaPeps', 'Ranch', 'Spinach'];

// function createOrder(regular = []) {
//   return function(ingredient) {
//     regular.push(ingredient);
//     return regular;
//   }
// }

// const stevensSandwich = createOrder(stevensRegularOrder);
// console.log(stevensSandwich('Lettuce'));

// const robsSandwich = createOrder();
// console.log(robsSandwich('Tuna'));

function createOrder(regular = []) {
	return {
		addIngredient(ingredient) {
			regular.push(ingredient);
		},
		deleteIngredient(ingredient) {
			for (let i = 0; i < regular.length; i++) {
				if (regular[i] === ingredient) {
					regular.splice(i, 1);
					i--;
				}
			}
		},
		readIngredients() {
			console.log(regular);
		},
	};
}

// FUNCTION bankAccount -> startingBalance
// return function => Deposit or Withdraw

// function bankAccount(balance) {
// 	return function(action, amt) {
// 		if (action === 'deposit') {
// 			return (balance += amt);
// 		} else if (action === 'withdraw') {
// 			if (balance - amt < -50) {
// 				return 'No Go';
// 			}
// 			return (balance -= amt);
// 		}
// 	};
// }

// const stevensAccount = bankAccount(20);
// stevensAccount('deposit', 80);
// stevensAccount('withdraw', 1000);

// Calculator
// Add, subtract, multiply, divide
// number = 0

// function calculator() {
//   let num = 0;
//   return {
//     add(val) {
//       return num += val;
//     },
//     subtract(val) {
//       return num -= val;
//     },
//     multiply(val) {
//       return num *= val;
//     },
//     divide(val) {
//       return num /= val;
//     },
//     reset() {
//       num = 0;
//     }
//   }
// }

// const calcOne = calculator();

// calcOne.add(10);
// calcOne.subtract(5);

// function sayName() {
//   return this.name;
// }

// const user = {
//   name: 'steven',
//   sayName: sayName
// }

// const user2 = {
//   name: 'Jeff',
//   sayJeff: sayName
// }

// user.sayName();
// user2.sayJeff();
// sayName();

function drive() {
  return this.miles += 1;
}

const grandNational = {
  make: 'Buick',
  model: 'Grand National',
  year: "'87",
  miles: 0
}

const x5m = {
  make: 'BMW',
  model: 'X5 M',
  year: '2018',
  miles: -400
}

// drive.call(x5m, , , ,);
// drive.apply(x5m, [, , ,]);

// const driveNational = drive.bind(grandNational);
// const driveBeemer = drive.bind(x5m);
// driveNational();
// console.log(driveNational());
// console.log(driveBeemer());

// Object factory (like action creators);
// function createCar(make, model, year) {
//   return {
//     make: make,
//     model: model,
//     year: year
//   }
// }

// const myCar = createCar('Ford', 'Mustang', 2001);

// let obj = {}
// obj.name = 'Steven';

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.miles = 0;
// }

// Car.prototype.drive = function() {
//     return this.miles += 1;
//   }

// const mustang = new Car('Ford', 'Mustang', 2001);
// console.log(mustang);
// console.log(mustang.drive);

// Array
// String
// Object
// Number
// Symbol
// Map
// Set
// Math

// Array.prototype.doTheThing = function() {
//   return 'Thing done';
// }

// const myArray = [];

// myArray.doTheThing();

// const user = {
//   name: 'Steven',
//   sayName() {
//     //
//     setInterval(() => {
//       console.log(this.name);
//     }, 1000);
//     //
//   }
// }

// user.sayName();

// class Car {
//   constructor(make, year) {
//     this.state = {
//       make,
//       year,
//       miles: 0
//     }
//   }
//   tellMake() {
//     return this.state.make;
//   }
// }

// const mustang = new Car('Ford', 2001);

// console.log(mustang);
// console.log(mustang.tellMake());

class Animal {
  constructor(name, noise) {
    this.name = name;
    this.noise = noise;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  constructor(noise, name) {
    super(noise, name);
  }
  speak() {
    console.log(this.name + ' ' + this.noise);
  }
}

const rocky = new Dog('Rocky', 'Woofs');
rocky.speak();

// Practice

/* 

An isogram is a word that has no repeating letters, consecutive or nonconsecutive. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram". Assume all inputs will be lowercase.

For example:
console.log(isIsogram('algorithm')); // returns true
console.log(isIsogram('do the max')); // returns false (multiple spaces)
console.log(isIsogram('hello there')); // returns false (multiple l's)

*/

function isIsogram( str ) {
  // split the alphabets
  // for loop
  // if / else

var split = str.split('');

var track = [];
//console.log(split);

  for(var i = 0; i < split.length; i++){
    //str.indexOf(searchValue[, fromIndex])]
    
    //console.log(track);
    //console.log(track.indexOf(split[i]));
    if(track.indexOf(split[i]) > -1){
      return false;
    }
    track.push(split[i]);
  }
  return true;
}

console.log(isIsogram('algorithm'));
console.log(isIsogram('do the max'));

//Problem

// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// Practice

function assignEvenAndOdds(userInput){
  // var arr = userInput.split(',');
  var arr =[];
  console.log(arr);
  var evens = [];
  var odds = [];

  userInput.filter(num => {
      if(parseInt(num) % 2 === 0){
          evens.push(num);
      }else if(parseInt(num) % 2 !== 0){
          odds.push(num);
      }
  });
  console.log(evens);
  console.log(odds);
}
assignEvenAndOdds(['1','2','3','4'])


// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function tellMeTime(seconds){
  
  let hours = checkLength(Math.floor(seconds/3600);
  let minutes = checkLength(Math.floor((sconds%3600)/60);
  let seconds = checkLength(seconds-(hours*3600)-(minutes/60));
  
  return `${hours}:${minutes}:${seconds}`
}

function checkLength(digit){
  if(('+digit').legth < 2) {return '0'+digit}
  return digit;
}

tellMeTime(3599);
// function tellMeTime(secondsVal){
// // var minutes = Math.floor(time / 60); And to get the remaining seconds, multiply the full minutes with 60 and subtract from the total seconds: var seconds = time - minutes * 60; Now if you also want to get the full hours too, divide the number of total seconds by 3600 (60 minutes/hour.Sep 17, 2010

// var secondsNum = parseInt(secondsVal, 10);

// var hours = secondsNum/3600 < 1 ? 00 : (secondsNum/3600);
// console.log(hours);

// var minutes = Math.floor(secondsNum/60);
// console.log(minutes);

// var seconds = (seconds-minutes)*60 || 00;
// console.log(seconds);

// return (`${hours}:${minutes}:${seconds}`); 

// }

// tellMeTime(359999) // 00:01:00


// function nameIt(seconds) {

// let min = 0,
//     hour = 0,
//     sec = 0;

// if(seconds){
//   if(seconds>=60){
//     min = Math.floor(seconds/60)
//     sec = seconds%60
//   }else {
//     sec = seconds;
//   }
//   if(min>=60){
//     hour = Math.floor(min/60)
//     min = min-hour * 60
//   }
// }
// return `${hour}:${min}:${sec}`
// }

// nameIt(5999);

Operator

!!5
!!(4 % 2)
!!(undefined)
!!("a".length - 1)
!!([false])
!!([])22

// Practice

function reverseArray(arr){
  var newArray = [];
  // console.log(arr);
  
  if (arr.length > 0) {
    // console.log(newArray);
    newArray.push(arr[arr.length - 1]);
    // console.log(arr[arr.length - 1]);
    console.log(newArray);
    
    return newArray.concat(reverseArray(arr.slice(0, arr.length-1)))
  }
  return [];
  
  
};

var arr = [1,2,3,4]
var reversedArr = reverseArray(arr);

console.log(reversedArr)    // [4,3,2,1]
// console.log(arr)    // [1,2,3,4]

// Practice

/ Times Tables
// Write a function that generates a "Times Tables" function for any number passed in. The function should accept a single parameter (a number) and return a function that itself returns the product of that number and any number passed in.

function timesTable(num1){
var multiply = function(num2){
 return num1 * num2;
 };
 return multiply;
}

// var ninesTable = timesTable(9);
// ninesTable(8)    // => 72

var twelvesTable = timesTable(12);
twelvesTable(15)    // => 180
twelvesTable(100)    // => 1200

// Biller Builder
// You work for an e-commerce company that does business in New York and New Jersey. Due to differences in tax and shipping rates, the final bill for the same product is different for customers in the different states.

// The company has asked you to write a function that accepts a single parameter indicating a customer's state ('NY' or 'NJ') and returns a function that calculates the final bill for a customer in that state given the total list price of their items.

// The calculation of final bills are as follows:

// In New York, the final bill is calculated as the price of the item, plus a 3% shipping fee, plus a 9% sales tax assessed on the price of the item together with shipping costs.
// In New Jersey, the final bill is calculated as the price of an item, plus a 5% shipping fee, plus a 7% sales tax assessed on the price of the item together with shipping costs.
// So the final bill for a $100 item in New York would be: (100*1.03)*1.09 = 112.27 And in New Jersey: (100*1.05)*1.07 = 112.35


// function NY(){
//   return 1.03 * 1.09;
// }

// function NJ(){
//   return 1.05* 1.07;
// }

function biller(state){
  var bill = function(num){
  // return num * state();
  // }
    if(state === "NY"){
    return (num * 1.03) * 1.09;
    } else if(state === "NJ"){
    return (num * 1.05) * 1.07;
    } else {
    return "invalid State";
    }
  }
 return bill;
 }
 
 
 
 
 var newYorkBiller = biller('NY');
 newYorkBiller(100)   // => 112.27
 
 var newJersBiller = biller('NJ');
 newJersBiller(100)    // => 112.35

 // The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// Write a function that rearranges an integer into its largest possible value.
function superSize(int){
  const n = int;
let z = Array.from(n.toString()).map(Number);
  //console.log(z);
  let y = z.sort(function(a, b){return b-a});
  console.log(y);
}
superSize(123456) //654321
//superSize(105) // 510
//superSize(12) // 21
// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

// Are the numbers in order?

// In this Kata, your function receives an array of positive integers as input. Your task is to determine whether the numbers are in ascending order.

// For the purposes of this Kata, you may assume that all inputs are valid (i.e. arrays containing only positive integers with a length of at least 2).

function inAscOrder (arr){
  var first = arr[0];
  for (var i = 1; i < arr.length; i++){
    // if(arr[i] < arr[i - 1])
    if(first > arr[i]){
      return false;
    }else {
      first = arr[i];
      //console.log(i);
    }
  }
  return true;
}
// For example:

//inAscOrder([1,2,4,7,19]); // returns true
//inAscOrder([1,2,3,4,5]); // returns true
//inAscOrder([1,6,10,18,2,4,20]); // returns false
//inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

// Extra Challenge: If time, try to optimise and shorten your code as much as possible.

// Practice

function unformatted() {
  function innerFunction(count) {
    while(count > 0) {
      count--;
        if(count===2) {
          console.log("count is two!");
        }
    }
    console.log("are we still in the inner func?");
  } 
  innerFunction(5);
  return "end of the func";
}


unformatted();

// Practice

// ////////// PROBLEM 6 //////////

// // Do not edit the code below.
// const purchases = [{"owner":"Barry","price":103},{"owner":"Bob","price":75},
// {"owner":"Bob","price":73},{"owner":"Barry","price":57},{"owner":"Barry","price":128},
// {"owner":"Bob","price":119},{"owner":"Barry","price":133},{"owner":"Barry","price":27},
// {"owner":"Barry","price":138},{"owner":"Bob","price":68},{"owner":"Bob","price":50},
// {"owner":"Barry","price":9},{"owner":"Bob","price":123},{"owner":"Bob","price":135},
// {"owner":"Barry","price":30},{"owner":"Barry","price":129},{"owner":"Barry","price":38},
// {"owner":"Bob","price":133},{"owner":"Barry","price":109},{"owner":"Bob","price":115}];
// // // Do not edit the code above.

// // /*
// //   Use a high order method to create to get the sum of bobsTotal.
// // */

// //console.log(purchases);


// var bobsTotal = purchases.reduce((total,green) => {
//   if(green['owner'] === 'Bob'){
//     //console.log(green['owner']);
//     total += green['price'];
//     //console.log(total)
//   }
//   return total;
// },0)

// console.log(bobsTotal)


// let bobsTotal = purchases.reduce((total, own) => {
//   if(own.owner === 'Bob'){
//     total += own.price;
//   }
//   return total;
// },0);
// //Code Here

// var arr = [1,2,3,4,5];
// var newArr = [arr, 6];

// console.log(newArr)

// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(sum(...numbers));

// ////////// PROBLEM 4 //////////

// // Do not edit the code below.
// const monstersInYourPocket = [{"monster":"Bulbabunny","CP":156},{"monster":"Bulbabunny","CP":135},
// {"monster":"Bulbabunny","CP":250},{"monster":"Ponylopse","CP":277},{"monster":"Ponylopse","CP":184},
// {"monster":"Pikadoughnet","CP":207},{"monster":"Bulbabunny","CP":139},{"monster":"Pikadoughnet","CP":47},
// {"monster":"Pikadoughnet","CP":175},{"monster":"WaterHorsia","CP":26},{"monster":"Ponylopse","CP":19},
// {"monster":"Pikadoughnet","CP":218},{"monster":"Charaflier","CP":101},{"monster":"WaterHorsia","CP":96},
// {"monster":"Pikadoughnet","CP":253},{"monster":"Sandmush","CP":146},{"monster":"Bulbabunny","CP":247},
// {"monster":"Charaflier","CP":55},{"monster":"Bulbabunny","CP":72},{"monster":"Pikadoughnet","CP":300},
// {"monster":"Sandmush","CP":262},{"monster":"Sandmush","CP":25},{"monster":"Charaflier","CP":215},
// {"monster":"Ponylopse","CP":125},{"monster":"Bulbabunny","CP":178}];
// // // Do not edit the code above.

// // /*
// //   Now we're going to ramp these up a little bit.
// //   Instead of just arrays of numbers, we are going to have array of objects that we want to use map, filter, and reduce with.

// //   Use the filter method to return only the monsters that have a CP of over 200.
// // */



// // var monsters = monstersInYourPocket.filter(m => m['CP'] > 200);
// var monsters = monstersInYourPocket.filter(m => m['monster'] === 'Bulbabunny');


// console.log(monsters);



// //Code Here
// let myStrongest = monstersInYourPocket.filter(monster => monster.CP > 200);


// ////////// PROBLEM 2 //////////

// // Do not edit the code below.
// const prices = [15.00, 23.00, 78.00, 34.00, 12.00, 86.00, 12.00, 79.00, 32.00];
// // // Do not edit the code above.

// // /*
// //   Use the map method on the prices array to calculate a new array of post-tax prices.
// //   Use a 7% tax rate.

// //   Math reminder! To calculate the price after tax, multiply the price by 1 plus the taxRate as a decimal.
// //   Example: if tax is 7%, the price afterTax could be calculated like this: afterTax = price * 1.07) 

// //   The map function also takes a callback with the parameters
// //   function(element, index, wholeArray){}  Function Form
// //   (element, index, wholeArray)=>{}    Arrow Form
// // */



// var tax = prices.map(price => price * 1.07);

// console.log(tax);


// //Code Here
// let postTaxPrices = prices.map(price => price*1.07);// = prices.map(/* Provide Your Callback Here );


// // Modify the given for loop to add ten to each element in the passed in array and then push the sum into the newArr array. You can assume that all items in the array will be numbers.


// function addTen( arr ) {

//   //var newArr = arr.map( num => num+10);
// //   for(var i =0; i < arr.length; i++){
// //     console.log(arr[i]);
// //     newArr.push(arr[i]+10);

// //     //console.log(arr[i]);
// //   }
// //   return newArr;
// console.log(arr)
//  }

/*
  Once you complete a problem, refresh ./higher-order.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

// ////////// PROBLEM 1 //////////

// // Do not edit the code below.
// const mixedNumbers = [6,3,1,7,5,2,6,8,9,4,2,7,9,3,1,8,4,3];
// // // Do not edit the code above.

// // /*
// //   Use the filter method on mixedNumbers to make a new array of just the even numbers.

// //   The filter function takes a callback with the parameters
// //   function(element, index, wholeArray){}  Function Form
// //   (element, index, wholeArray)=>{}    Arrow Form


// var evens = mixedNumbers.filter(even => even % 2 === 0);

// console.log(evens)

// */

// //Code Here
// let evenNumbers = mixedNumbers.filter(even => even % 2 === 0);// = mixedNumbers.filter(/* Provide Your Callback Here */)


// // Do not edit the code below.
// const prices = [15.00, 23.00, 78.00, 34.00, 12.00, 86.00, 12.00, 79.00, 32.00];
// // // Do not edit the code above.

// // /*
// //   Use the map method on the prices array to calculate a new array of post-tax prices.
// //   Use a 7% tax rate.

// //   Math reminder! To calculate the price after tax, multiply the price by 1 plus the taxRate as a decimal.
// //   Example: if tax is 7%, the price afterTax could be calculated like this: afterTax = price * 1.07) 

// //   The map function also takes a callback with the parameters
// //   function(element, index, wholeArray){}  Function Form
// //   (element, index, wholeArray)=>{}    Arrow Form
// // */



// var tax = prices.map(price => price * 1.07);

// console.log(tax);


// //Code Here
// let postTaxPrices = prices.map(price => price*1.07);// = prices.map(/* Provide Your Callback Here );


// ////////// PROBLEM 3 //////////

// // Do not edit the code below.
// const populations = [8175133, 3792621, 2695598, 2100263];
// // // Do not edit the code above.

// // /*
// //   Use the reduce method to calculate the sum of all the populations in the array.

// //   The reduce function has a slightly different setup for it's callback.
// //   function(runningTotal, curElement, curIndex, wholeArray){} Function Form
// //   (runningTotal, curElement, curIndex, wholeArray)=>{} Arrow Form
// // */



// var pops = populations.reduce(((total,pop) => total += pop),0);

// console.log(pops);

// //Code Here
// let totalPopulation = populations.reduce((total,pop) => total+pop);

const _ = require('lodash');

// function addToArray(arr, input) {
// 	arr.push(input);
// 	return arr;
// }

// const arrayWithVal = addToArray([], 'Hello');

// const addedVal = addToArray(arrayWithVal, 'world');

// console.log(addToArray(addToArray(addToArray([], 'World'), 'Hello'), 'Messy'))

// console.log(addedVal);

// const myArr = [1, 2, 3];

// const total = myArr
// 	.map(val => val * 2)
// 	.filter(val => val > 4)
// 	.reduce((acc, cur) => acc + cur);

// console.log(total);
// // const myVar = if (name === 'Steven') {
// //   'Steven'
// // } else {
// //   'John'
// // }

// const myVar = name === 'Steven' ? 'Steven' : 'John';

// const x = () => 7;
// const y = someVal => someVal + 2;

// y(x());

// const _ = {
// 	map() {},
// 	filter() {},
// 	chain() {},
// };

const arr = [1, 2, 3];
const users = [
	{ name: 'Steven', age: 26 },
	{ name: 'Jeff', age: 35 },
	{ name: 'Steven', age: 234 },
];

const nums = { a: 2, b: 3 };

// Object.values(nums).map(val => val * 2);

// const exponent = _.map(arr, val => val * val)
// const userNames = _.map(users, 'age');
// const mapped = _.map(nums, (num) => num + num)

// console.log(mapped);

// const collect = _.union([1, 2, 3], [2, 4, 6], [1, 5, 6]).sort();

// console.log(collect);

// const intersect = _.intersection([1, 2, 3, 5], [1, 4, 5, 6], [1, 2, 5]);

// console.log(intersect);

// const grouped = _.groupBy(users, 'name');

// console.log(Object.entries(grouped));


// async/await
// const axios = require('axios');

// async function getThePeople() {
//   try {
//   const data1 = axios.get('https://www.swapi.co/api/people');
//   const data2 = axios.get(`https://www.swapi.co/api/people`);
//   const data3 = axios.get('https://www.swapi.co/api/people');
//   return await Promise.all([data1, data2, data3]);
//   } catch(e) {
//     console.log(e);
//   }
// }
// (async function() {
//   const response = await getThePeople();
//   console.log(response);
// })()
// try {
//   doSomethingBroken();
// } catch (err) {
//   console.log(err);
// }
// function promiseGen() {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve('True');
//     } else {
//       reject('False');
//     }
//   });
// }

// promiseGen().then(res => console.log(res)).catch(err => console.log('err', err));

// throw new Error('You broke the things');

let arr =[]
console.log(arr.length)

function insertion(arr){
  for(let i = 1; i < arr.length; i++){
    // console.log('i',arr[i])
    for(let j = 0; j < i; j++)
    // console.log('j', arr[i][j])
    if(arr[i] < arr[j]){
      console.log(arr[i], arr[j])
      let [bigger] = arr.splice(i, 1)
      arr.splice(j, 0, bigger)
      j=i
    }
  }
  return arr
}

insertion([3,2,1])

// const user = {
//   name: 'abhishek',
//   sayName() {
//     return this.name;
//   }
// }

// // Implicit Binding 
// user.sayName();


// function sayName(){
//   return this.name;
// }
// const user = {
//   name: 'abhishek',
//   sayName: sayName
// }
// const user2 = {
//   name: 'Jeff',
//   sayJeff: sayName
// }
// // user.sayName();

// user2.sayJeff();

//Implicit Binding 


//Explicit Binding

// function drive(){
//   return this.miles += 1;
// }

// const grandNational = {
//   make: 'Buick',
//   model: 'Grand National',
//   year: "'87",
//   miles: 0
// }

// const x5m = {
//   make: 'BMW',
//   model: 'X5M',
//   year: "2018",
//   miles: 0
// }

// drive.call(x5m,,,,);
// drive.apply(x5m, [,,,,]);

// const driveNational = drive.bind(grandNational);

// const driveBeemer = drive.bind(x5m);

// driveNational();
// driveNational();
// driveBeemer();

// Object Factory (Like action creators)
// function createCar(make, model, year){
//   return {
//     make: make,
//     model: model,
//     year: year
//   }
// }

//Constructor functions 
// function Car(make, model, year){
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.miles = 0;
//   this.drive = function () {
//     return this.miles += 1;
//   }
// }

// const mustang = new Car('Ford', 'Mustang', 2001);

// console.log(mustang)




function unformatted() {
  function innerFunction(count) {
    while(count > 0) {
      count--;
        if(count===2) {
          console.log("count is two!");
        }
    }
    console.log("are we still in the inner func?");
  } 
  innerFunction(5);
  return "end of the func";
}


unformatted();

function insertion(arr){
  for(let i = 1; i < arr.length; i++){
    // console.log('i',arr[i])
    for(let j = 0; j < i; j++)
    // console.log('j', arr[i][j])
    if(arr[i] < arr[j]){
      console.log(arr[i], arr[j])
      let [bigger] = arr.splice(i, 1)
      arr.splice(j, 0, bigger)
      j=i
    }
  }
  return arr
}

insertion([3,2,1])

// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3
// Description:

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null/NULL.

//384,400 km to the moon

//https://www.codewars.com/kata/folding-your-way-to-the-moon

// write a function that takes in a number
//make a counter for paper folds
// check if number is positive else return null
// increment counter as we make folds
// return our counter

function foldsToTheMoon(distance){
  let counter = 0;
  if(distance <=0){
    return null
  }

  for(let i = .0001; i < distance; i+=i){
    counter++;
  }
  return counter;
}

foldsToTheMoon(384400000);

// function distanceToMoon(thickness){
// // let paperThickness = thickness*0.001
// // console.log(paperThickness)
// let moon = 384400 * 1000
// let result = 0;

// if(thickness < 0){
//   return 'NULL';
// }else {
//   result = moon/(thickness)*2
// }
// console.log(result);
// }

// distanceToMoon(0.0001);

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    ==>  "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); ==>  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    ==>  "C-Ww-Aaa-Tttt"

const accum = (str) => {
  var count = 1;
  var newStr = '';
  
  for(var i = 0; i < str.length; i++) {
      newStr += str.charAt(i).toUpperCase();
  
   
    for(var j = 1; j < count; j++) {
      newStr += str[i].toLowerCase();
    }
    count++;
  
    i !== (str.length - 1) ? newStr += `-` : newStr;
  
  }
  return newStr;
  }
  
  accum('cwAt')

  // function accum(str){
  // let arr = str.split('')
  
  // let result = arr.map((el, i) => {
  //   let upper = el.toUpperCase();
  //   let counter = i + 1;

  //   return `${upper}${el}` 
  // })
  // console.log(result)
  // return result.join('-')
//   let count = 1
//   let newStr = '';

//   for(var i = 0; i< str.length; i++){
//     newStr += str[i].toUpperCase();

//     for(var j=1; j< count; j++){
//       newstr +=str.charAt(i).toLowerCase();
//     }
//     count++;

//     i !== (str.length--1) ? newStr += '-' : newStr;
//   }
//   return newStr;
// }

// accum("abcd"); 

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function tellMeTime(seconds){
  
  let hours = checkLength(Math.floor(seconds/3600);
  let minutes = checkLength(Math.floor((sconds%3600)/60);
  let seconds = checkLength(seconds-(hours*3600)-(minutes/60));
  
  return `${hours}:${minutes}:${seconds}`
}

function checkLength(digit){
  if(('+digit').legth < 2) {return '0'+digit}
  return digit;
}
tellMeTime(3599);
// function tellMeTime(secondsVal){
// // var minutes = Math.floor(time / 60); And to get the remaining seconds, multiply the full minutes with 60 and subtract from the total seconds: var seconds = time - minutes * 60; Now if you also want to get the full hours too, divide the number of total seconds by 3600 (60 minutes/hour.Sep 17, 2010

// var secondsNum = parseInt(secondsVal, 10);

// var hours = secondsNum/3600 < 1 ? 00 : (secondsNum/3600);
// console.log(hours);

// var minutes = Math.floor(secondsNum/60);
// console.log(minutes);

// var seconds = (seconds-minutes)*60 || 00;
// console.log(seconds);

// return (`${hours}:${minutes}:${seconds}`); 

// }

// tellMeTime(359999) // 00:01:00

// function nameIt(seconds) {

// let min = 0,
//     hour = 0,
//     sec = 0;

// if(seconds){
//   if(seconds>=60){
//     min = Math.floor(seconds/60)
//     sec = seconds%60
//   }else {
//     sec = seconds;
//   }
//   if(min>=60){
//     hour = Math.floor(min/60)
//     min = min-hour * 60
//   }
// }
// return `${hour}:${min}:${sec}`
// }

// nameIt(5999);

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9];

let both = [...arr1, ...arr2];
console.log(both);

// forEach helper array Function

//Below code to refactor using forEach();

function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];
  
  // for (var i = 0; i < posts.length; i++) {
  //   savePost(posts[i]);
  // }
  
  posts.forEach(function(post){
    savePost(post);
  });
}

// https://www.codewars.com/kata/sort-an-array-by-value-and-index/train/javascript

// Your task is to sort an array of integer numbers by the product of the value and the index of the positions. 

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers. 

// Example:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
// 2 =>  2 * 2 = 4   -> Output-Pos 1
// 3 =>  3 * 3 = 9   -> Output-Pos 2
// 4 =>  4 * 4 = 16  -> Output-Pos 3
// 5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

function sort (arr){
  let obj = {};

  let newArr = arr.map((el,i) => {
    obj[el*(i+1)]=el;
    console.log(obj)
    });
  //console.log(newArr)
  return Object.values(obj);

}

sort([23,2,3,4,5])

// // let arr = [1,2,3,4,5,4,3,2,1];

// // let product = arr.reduce(function(total, elem){
// // console.log(total, elem)
// //   return total * elem
// // })

// // product

// let customers = [
//   {name: "Shea", total: 150, message: 'This '},
//   {name: 'Jarid', total: 1, message: 'is '},
//   {name: 'Joe', total: 10000, message: 'a new '},
//   {name: 'Erik', total: -100, message: 'message.'}
// ]

// // let total = customers.reduce( function(total, elem){
// //   return total + elem.total; 
// // }, 0)

// let sentence = customers.reduce(function(total, elem){
//   return total + elem.message;
// }, '')

// sentence

// let dog = {
//   name: 'Rufus',
//   isBad: false,
//   bark: function(){
//     console.log('woof')
//   },
//   age: 77,
//   color: 'Brindle'
// };

// let extension = {
//   isFed: true,
//   size: 'Big',
//   isBad : true
// }
// let newDog = Object.assign({}, dog, extension);
// console.log(dog === newDog);
// console.log(newDog)

// let newDog = Object.assign({}, dog, extension);
// console.log(dog === newDog);
// console.log(newDog)

// for ( let key in dog ){
//   if (!dog[key]){
//     delete dog[key]
//   }
// }
// for (key in extension){
//   dog[key] = extension[key];
// }
// dog


// let person = {name: "Shea", total: 150, message: 'This '}

// let name = person.name;
// let total = person.total
// let message = person.message;

// let {name, total, message, age} = person;
// console.log(name, total, message, age)

// destructArr([{name:'Shea'}])

// function addTwo (x, y){
//   return x + y;
// }

// let addTwo2 = (x, y) =>  x + y;  

// let addTwo3 = (x) => x + 2;

// addTwo3(10)

// let arr = [1,2,3,4,5]

// arr.map(elem => {

//   return elem + 2
// }); 

// let person = {
//   name: "Shea",
//   sayName: () => {
//     return this.name;
//   }
// }

// person.sayName()

// function car (make, model, year){
//   return {
//     make, model, year, go: function(){console.log('vroom')}
//   }
// }

// let myCar = car ('Nissan', 'xTerra', 2008)
// // myCar

// function Car (make, model, year){
//   // let this = {make: make, model:model};
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   // return this;
// }

// Car.prototype.go = function(){
//   console.log("vroom")
// }

// let myToyCar = new Car('Triumph', 'Spitfire', 1976);
// console.log(myToyCar)
// console.log(myCar)
// myToyCar.go();






class Car {
  constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  go(){
    console.log('vroom')
  }
  stop(){
    console.log('Squeal!!')
  }
}
class SUV extends Car {
  constructor(make, model, year, offRoad){
    super(make, model, year)
    this.offRoad = offRoad;
  }
  tipOver(){
    console.log('OH NO!!!!')
  }
}
let myCar = new SUV('Nissan', 'xTerra', 2008, true)
myCar.tipOver()
let myToyCar = new Car('Triumph', 'Spitfire', 1976);

 
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

function groupBy(collection, predicate){ 
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
  var temp = [];
  var key = [];
  var output = {};
  // Iterate over the array, using forEach
    collection.forEach(function(item){
      //console.log('Iterate Item', item);
      
      if(typeof predicate === 'function'){
        
        if(typeof item === 'string'){
            //console.log(predicate);
            
            //console.log(key);
            key = firstLetter(item);
            output[key] = item;
            //console.log('output', output);
        
        } else if (typeof item === 'number'){
          //console.log('hello world');
          key = mathValue(item);
          //console.log(key);
          output[key] = item;
          //console.log('output', output);
        }
    }else if(typeof predicate === 'string'){
      //console.log(item.length);
      //console.log(key);
      key = item.length;
      output[key] = item;
      //console.log('output', output);
    }
  });

return output;
// //console.log('output', output);

}

var firstLetter = function(word) { return word.charAt(0); };

var mathValue = function(val) { return Math.floor(val)};

console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'], firstLetter));
// returns { 'a': ['apple'], 'c': ['cat', 'card'], 'b': ['boat', 'bond'] }

console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'], 'length'));
// returns { '5': ['apple'], '4': ['boat', 'card', 'bond'], '3': ['cat'] }

console.log(groupBy([1.4, 5.6, 3.6, 1.8, 3.4], function(val) { 
  return Math.floor(val); 
}));
// what would this return?
// returns { '5': [5.6], '3':[3.6, 3.4], '1':[1.4,1.8]};

const _ = require('lodash');

// function addToArray(arr, input) {
// 	arr.push(input);
// 	return arr;
// }

// const arrayWithVal = addToArray([], 'Hello');

// const addedVal = addToArray(arrayWithVal, 'world');

// console.log(addToArray(addToArray(addToArray([], 'World'), 'Hello'), 'Messy'))

// console.log(addedVal);

// const myArr = [1, 2, 3];
// const total = myArr
// 	.map(val => val * 2)
// 	.filter(val => val > 4)
// 	.reduce((acc, cur) => acc + cur);

// console.log(total);

// // const myVar = if (name === 'Steven') {
// //   'Steven'
// // } else {
// //   'John'
// // }

// const myVar = name === 'Steven' ? 'Steven' : 'John';

// const x = () => 7;
// const y = someVal => someVal + 2;
// y(x());

// const _ = {
// 	map() {},
// 	filter() {},
// 	chain() {},
// };

const arr = [1, 2, 3];
const users = [
	{ name: 'Steven', age: 26 },
	{ name: 'Jeff', age: 35 },
	{ name: 'Steven', age: 234 },
];

const nums = { a: 2, b: 3 };

// Object.values(nums).map(val => val * 2);

// const exponent = _.map(arr, val => val * val)
// const userNames = _.map(users, 'age');
// const mapped = _.map(nums, (num) => num + num)

// console.log(mapped);

// console.log(mapped);

// const collect = _.union([1, 2, 3], [2, 4, 6], [1, 5, 6]).sort();

// console.log(collect);

// const intersect = _.intersection([1, 2, 3, 5], [1, 4, 5, 6], [1, 2, 5]);

// console.log(intersect);

// const grouped = _.groupBy(users, 'name');

// console.log(Object.entries(grouped));

// var names = ['Alexandria', 'Matthew', 'Joe']

// names.every(function (name){
//   return name.length >4 
// })

// names.some(function (name){
//   return name.length >4 
// })

// var requests = [
//   { url: '/photos', status: 'complete' },
//   { url: '/albums', status: 'pending' },
//   { url: '/users', status: 'failed' }
// ];
// var inProgress;

// inProgress = requests.some(function(request){
//     return request.status === 'pending';
// });

// // ------- 

// // Balance parnethesis using Reduce Helper function

// function checkPattern(str) {

// return !str.split('').reduce(function(acc, char){

//   if(acc < 0 ) {return acc};
//   if(acc === '(') {return ++acc};
//   if(acc === ')') {return --acc};

//   return acc
// }, 0)

// }
// checkPattern('(()((())))');

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];
var deskTypes = desks.reduce(function(acc, desk) {
    
  console.log(desk.type)
  acc.sitting++
  acc.standing++
  console.log(acc.sitting)
  console.log(acc.standing)

  if(desk.type === 'sitting'){ ++acc.sitting}
  if(desk.type === 'standing'){ ++acc.standing}

  return acc;
}, { sitting: 0, standing: 0 });

const _ = require('lodash');

const purchases = [
  { month: "February", price: 37.85 },
  { month: "January", price: 73.24 },
  { month: "February", price: 61.41 },
  { month: "April", price: 41.07 },
  { month: "March", price: 34.5 },
  { month: "April", price: 68.52 },
  { month: "March", price: 44.53 },
  { month: "April", price: 44.95 },
  { month: "January", price: 72.86 },
  { month: "February", price: 58.96 },
  { month: "April", price: 88.62 },
  { month: "April", price: 32.53 },
  { month: "January", price: 61.02 },
  { month: "April", price: 22.92 },
  { month: "April", price: 79.4 },
  { month: "April", price: 13.23 },
  { month: "February", price: 26.31 },
  { month: "February", price: 74.3 },
  { month: "March", price: 28.76 },
  { month: "March", price: 85.51 },
  { month: "March", price: 75.88 },
  { month: "January", price: 22.83 },
  { month: "January", price: 44.39 },
  { month: "February", price: 22.04 },
  { month: "April", price: 56.89 },
  { month: "February", price: 86.19 },
  { month: "April", price: 87.99 },
  { month: "January", price: 14.25 },
  { month: "March", price: 60.8 },
  { month: "February", price: 23.65 }
];

const purchasesByMonth = _.groupBy(purchases, "month");
console.log(purchasesByMonth);
// for (key in purchasesByMonth) {
//   console.log(typeof key)
// }

purchases.map(e => e.price)


// _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
//   (result[value] || (result[value] = [])).push(key);
//   return result;
// }, {});



// console.log(purchasesByMonth.price)  
// const totalByMonth = _.reduce(purchasesByMonth, )

const _ = require('lodash');

const purchases = [
  { month: "February", price: 37.85 },
  { month: "January", price: 73.24 },
  { month: "February", price: 61.41 },
  { month: "April", price: 41.07 },
  { month: "March", price: 34.5 },
  { month: "April", price: 68.52 },
  { month: "March", price: 44.53 },
  { month: "April", price: 44.95 },
  { month: "January", price: 72.86 },
  { month: "February", price: 58.96 },
  { month: "April", price: 88.62 },
  { month: "April", price: 32.53 },
  { month: "January", price: 61.02 },
  { month: "April", price: 22.92 },
  { month: "April", price: 79.4 },
  { month: "April", price: 13.23 },
  { month: "February", price: 26.31 },
  { month: "February", price: 74.3 },
  { month: "March", price: 28.76 },
  { month: "March", price: 85.51 },
  { month: "March", price: 75.88 },
  { month: "January", price: 22.83 },
  { month: "January", price: 44.39 },
  { month: "February", price: 22.04 },
  { month: "April", price: 56.89 },
  { month: "February", price: 86.19 },
  { month: "April", price: 87.99 },
  { month: "January", price: 14.25 },
  { month: "March", price: 60.8 },
  { month: "February", price: 23.65 }
];

const purchasesByMonth = _.groupBy(purchases, "month");
console.log(purchasesByMonth);
// for (key in purchasesByMonth) {
//   console.log(typeof key)
// }

purchases.map(e => e.price)


// _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
//   (result[value] || (result[value] = [])).push(key);
//   return result;
// }, {});



// console.log(purchasesByMonth.price)  
// const totalByMonth = _.reduce(purchasesByMonth, )

// async/await
// const axios = require('axios');

// async function getThePeople() {
//   try {
//   const data1 = axios.get('https://www.swapi.co/api/people');
//   const data2 = axios.get(`https://www.swapi.co/api/people`);
//   const data3 = axios.get('https://www.swapi.co/api/people');
//   return await Promise.all([data1, data2, data3]);
//   } catch(e) {
//     console.log(e);
//   }
// }
// (async function() {
//   const response = await getThePeople();
//   console.log(response);
// })()
// try {
//   doSomethingBroken();
// } catch (err) {
//   console.log(err);
// }// (async function() {
//   const response = await getThePeople();
//   console.log(response);
// })()
// try {
//   doSomethingBroken();
// } catch (err) {
//   console.log(err);
// }
// function promiseGen() {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve('True');
//     } else {
//       reject('False');
//     }
//   });
// }
// promiseGen().then(res => console.log(res)).catch(err => console.log('err', err));

// throw new Error('You broke the things');

let arr =[]
console.log(arr.length)

function insertion(arr){
  for(let i = 1; i < arr.length; i++){
    // console.log('i',arr[i])
    for(let j = 0; j < i; j++)
    // console.log('j', arr[i][j])
    if(arr[i] < arr[j]){
      console.log(arr[i], arr[j])
      let [bigger] = arr.splice(i, 1)
      arr.splice(j, 0, bigger)
      j=i
    }
  }
  return arr
}

insertion([3,2,1])

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    ==>  "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); ==>  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    ==>  "C-Ww-Aaa-Tttt"

const accum = (str) => {
  var count = 1;
  var newStr = '';
  for(var i = 0; i < str.length; i++) {
    newStr += str.charAt(i).toUpperCase();

 
  for(var j = 1; j < count; j++) {
    newStr += str[i].toLowerCase();
  }
  count++;

  i !== (str.length - 1) ? newStr += `-` : newStr;

}
return newStr;
}

accum('cwAt')

// function accum(str){
  // let arr = str.split('')
  
  // let result = arr.map((el, i) => {
  //   let upper = el.toUpperCase();
  //   let counter = i + 1;

  //   return `${upper}${el}` 
  // })
  // console.log(result)
  // return result.join('-')
//   let count = 1
//   let newStr = '';
// function counter() {
//   let num = 0;
//   return function () {
//     return num += 1;
//   }
// }

// const counterOne = counter();
// counterOne();
// console.log(counterOne());
// const counterTwo = counter();
// console.log(counterTwo());

const stevensRegularOrder = ['Ham', 'BP', 'BananaPeps', 'Ranch', 'Spinach'];
// function createOrder(regular = []) {
//   return function(ingredient) {
//     regular.push(ingredient);
//     return regular;
//   }
// }

// const stevensSandwich = createOrder(stevensRegularOrder);
// console.log(stevensSandwich('Lettuce'));

// const robsSandwich = createOrder();
// console.log(robsSandwich('Tuna'));
function createOrder(regular = []) {  return {    addIngredient(ingredient) 
  {      regular.push(ingredient);    },    deleteIngredient(ingredient) 
  {      for (let i = 0; i < regular.length; i++) {        if (regular[i] === ingredient) 
    {          regular.splice(i, 1); 
           i--;        }      }    },    
           readIngredients() {      console.log(regular);    },  };}

// FUNCTION bankAccount -> startingBalance
// return function => Deposit or Withdraw

// function bankAccount(balance) {
// 	return function(action, amt) {
// 		if (action === 'deposit') {
// 			return (balance += amt);
// 		} else if (action === 'withdraw') {
// 			if (balance - amt < -50) {
// 				return 'No Go';
// 			}
// 			return (balance -= amt);
// 		}
// 	};
// }
// const stevensAccount = bankAccount(20);
// stevensAccount('deposit', 80);
// stevensAccount('withdraw', 1000);

// Calculator
// Add, subtract, multiply, divide
// number = 0
// function calculator() {
//   let num = 0;
//   return {
//     add(val) {
//       return num += val;
//     },
//     subtract(val) {
//       return num -= val;
//     },
//     multiply(val) {
//       return num *= val;
//     },
//     divide(val) {
//       return num /= val;
//     },
//     reset() {
//       num = 0;
//     }
//   }
// }
// const calcOne = calculator();

// calcOne.add(10);
// calcOne.subtract(5);

// function sayName() {
//   return this.name;
// }

// const user = {
//   name: 'steven',
//   sayName: sayName
// }
// const user2 = {
//   name: 'Jeff',
//   sayJeff: sayName
// }

// user.sayName();
// user2.sayJeff();
// sayName();

function drive() {
  return this.miles += 1;
}
const grandNational = {
  make: 'Buick',
  model: 'Grand National',
  year: "'87",
  miles: 0
}

const x5m = {
  make: 'BMW',
  model: 'X5 M',
  year: '2018',
  miles: -400
}

// drive.call(x5m, , , ,);
// drive.apply(x5m, [, , ,]);
// const driveNational = drive.bind(grandNational);
// const driveBeemer = drive.bind(x5m);
// driveNational();
// console.log(driveNational());
// console.log(driveBeemer());

// Object factory (like action creators);
// function createCar(make, model, year) {
//   return {
//     make: make,
//     model: model,
//     year: year
//   }
// }
// const myCar = createCar('Ford', 'Mustang', 2001);

// let obj = {}
// obj.name = 'Steven';

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.miles = 0;
// }
// Car.prototype.drive = function() {
//     return this.miles += 1;
//   }

// const mustang = new Car('Ford', 'Mustang', 2001);
// console.log(mustang);
// console.log(mustang.drive);

// Array
// String
// Object
// Number
// Symbol
// Map
// Set
// Math
// Array.prototype.doTheThing = function() {
//   return 'Thing done';
// }

// const myArray = [];

// myArray.doTheThing();

// const user = {
//   name: 'Steven',
//   sayName() {
//     //
//     setInterval(() => {
//       console.log(this.name);
//     }, 1000);
//     //
//   }
// }
// user.sayName();

// class Car {
//   constructor(make, year) {
//     this.state = {
//       make,
//       year,
//       miles: 0
//     }
//   }
//   tellMake() {
//     return this.state.make;
//   }
// }

// const mustang = new Car('Ford', 2001);

// console.log(mustang);
// console.log(mustang.tellMake());

class Animal {
  constructor(name, noise) {
    this.name = name;
    this.noise = noise;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
class Dog extends Animal {
  constructor(noise, name) {
    super(noise, name);
  }
  speak() {
    console.log(this.name + ' ' + this.noise);
  }
}

const rocky = new Dog('Rocky', 'Woofs');
rocky.speak();

// Description:

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null/NULL.

//384,400 km to the moon

//https://www.codewars.com/kata/folding-your-way-to-the-moon

// write a function that takes in a number
//make a counter for paper folds
// check if number is positive else return null
// increment counter as we make folds
// return our counter
function foldsToTheMoon(distance){
  let counter = 0;
  if(distance <=0){
    return null
  }

  for(let i = .0001; i < distance; i+=i){
    counter++;
  }
  return counter;
}

foldsToTheMoon(384400000);
// function distanceToMoon(thickness){
// // let paperThickness = thickness*0.001
// // console.log(paperThickness)
// let moon = 384400 * 1000
// let result = 0;

// if(thickness < 0){
//   return 'NULL';
// }else//   result = moon/(thickness)*2
// }
// console.log(result);
// }

// distanceToMoon(0.0001);
var array1 = [5, 12, 8, 130, 44];
var array2 = ['hi','hello','abhi']

function findFirstLargeNumber(element) {
  return element === 'abhi';
}
console.log(array2.findIndex(findFirstLargeNumber))

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12
var array1 = [5, 12, 8, 130, 44];
var array2 = ['hi','hello','abhi']

function findFirstLargeNumber(element) {
  return element === 'abhi';
}

console.log(array2.findIndex(findFirstLargeNumber))

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12
// In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Given one side of the DNA, you need to find the complementary side.

// DNAStrand("ATTGC") ==>  "TAACG"
// DNAStrand("GTAT")  ==>  "CATA"

function dna (str){
  
  let arr = [];
  
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'A'){
      arr.push('T');
    } else if(str[i] === 'T'){
      arr.push('A');
    }else if(str[i] === 'G'){
      arr.push('C');
    }else if(str[i] === 'C'){
      arr.push('G');
    }
  }
  return arr.join('');
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

dna('ATTGC');
// var names = ['Alexandria', 'Matthew', 'Joe']

// names.every(function (name){
//   return name.length >4 
// })

// names.some(function (name){
//   return name.length >4 
// })
// var requests = [
//   { url: '/photos', status: 'complete' },
//   { url: '/albums', status: 'pending' },
//   { url: '/users', status: 'failed' }
// ];
x// var inProgress;

// inProgress = requests.some(function(request){
//     return request.status === 'pending';
// });

// // ------- 
// // Balance parnethesis using Reduce Helper function

// function checkPattern(str) {

// return !str.split('').reduce(function(acc, char){

//   if(acc < 0 ) {return acc};
//   if(acc === '(') {return ++acc};
//   if(acc === ')') {return --acc};

//   return acc
// }, 0)

// }

// checkPattern('(()((())))');
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];
var deskTypes = desks.reduce(function(acc, desk) {
    
  console.log(desk.type)
  acc.sitting++
  acc.standing++
  console.log(acc.sitting)
  console.log(acc.standing)
  if(desk.type === 'sitting'){ ++acc.sitting}
  if(desk.type === 'standing'){ ++acc.standing}

  return acc;
}, { sitting: 0, standing: 0 });
function countGrade(scores){
  //coding here...
  var S = scores.filter(function (x) { return x === 100}).length;
  
  var A = scores.filter(function (x) { return x < 100 && x >=90}).length;
  var B = scores.filter(function (x) { return x < 90 && x >=80}).length;
  
  var C = scores.filter(function (x) { return x < 80 && x >=60}).length;
  
  var D = scores.filter(function (x) { return x < 60 && x >=0}).length;
  
  var X = scores.filter(function (x) { return x === -1}).length;

console.log('S: ' + S);  
}
countGrade([50,60,70,80,90,100]); //should return {S:1, A:1, B:1, C:2, D:1, X:0}
// // let arr = [1,2,3,4,5,4,3,2,1];

// // let product = arr.reduce(function(total, elem){
// // console.log(total, elem)
// //   return total * elem
// // })

// // product

// let customers = [
//   {name: "Shea", total: 150, message: 'This '},
//   {name: 'Jarid', total: 1, message: 'is '},
//   {name: 'Joe', total: 10000, message: 'a new '},
//   {name: 'Erik', total: -100, message: 'message.'}
// ]
// // let total = customers.reduce( function(total, elem){
// //   return total + elem.total; 
// // }, 0)

// let sentence = customers.reduce(function(total, elem){
//   return total + elem.message;
// }, '')

// sentence
// let dog = {
//   name: 'Rufus',
//   isBad: false,
//   bark: function(){
//     console.log('woof')
//   },
//   age: 77,
//   color: 'Brindle'
// };

// let extension = {
//   isFed: true,
//   size: 'Big',
//   isBad : true
// }
// let newDog = Object.assign({}, dog, extension);
// console.log(dog === newDog);
// console.log(newDog)
// for ( let key in dog ){
//   if (!dog[key]){
//     delete dog[key]
//   }
// }
// for (key in extension){
//   dog[key] = extension[key];
// }
// dog
// let person = {name: "Shea", total: 150, message: 'This '}

// let name = person.name;
// let total = person.total
// let message = person.message;

// let {name, total, message, age} = person;
// console.log(name, total, message, age)

// let  req = {
//   body: {
//     user: {
//       location: {
//         city:
//         state:
//         zip:
//         address:
//       }
//     }
//   }
// }
// let {city, address, zip, state} = req.body.user.location;

// let arr = [1,2,3,4,5];

// let [one, blah, , ,five] = arr;

// console.log(one, blah, five)

// function destructObj ({name}){
//   return name;
// }

// destructObj({name:'Shea'})

// function destructArr([first]){
//   return first;
// }

// destructArr([{name:'Shea'}])

// function addTwo (x, y){
//   return x + y;
// }
// let addTwo2 = (x, y) =>  x + y;  

// let addTwo3 = (x) => x + 2;

// addTwo3(10)

// let arr = [1,2,3,4,5]

// arr.map(elem => {

//   return elem + 2
// }); 

// let person = {
//   name: "Shea",
//   sayName: () => {
//     return this.name;
//   }
// }

// person.sayName()
// function car (make, model, year){
//   return {
//     make, model, year, go: function(){console.log('vroom')}
//   }
// }

// let myCar = car ('Nissan', 'xTerra', 2008)
// // myCar
// function Car (make, model, year){
//   // let this = {make: make, model:model};
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   // return this;
// }
// Car.prototype.go = function(){
//   console.log("vroom")
// }

// let myToyCar = new Car('Triumph', 'Spitfire', 1976);
// console.log(myToyCar)
// console.log(myCar)
// myToyCar.go();
// Car.prototype.go = function(){
//   console.log("vroom")
// }

// let myToyCar = new Car('Triumph', 'Spitfire', 1976);
// console.log(myToyCar)
// console.log(myCar)
// myToyCar.go();

class Car {
  constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  go(){
    console.log('vroom')
  }
  stop(){
    console.log('Squeal!!')
  }
}
class SUV extends Car {
  constructor(make, model, year, offRoad){
    super(make, model, year)
    this.offRoad = offRoad;
  }
  tipOver(){
    console.log('OH NO!!!!')
  }
}
let myCar = new SUV('Nissan', 'xTerra', 2008, true)
myCar.tipOver()
let myToyCar = new Car('Triumph', 'Spitfire', 1976);
// Description:

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null/NULL.

//384,400 km to the moon

//https://www.codewars.com/kata/folding-your-way-to-the-moon

// write a function that takes in a number
//make a counter for paper folds
// check if number is positive else return null
// increment counter as we make folds
// return our counter

function foldsToTheMoon(distance){
  let counter = 0;
  if(distance <=0){
    return null
  }
  for(let i = .0001; i < distance; i+=i){
    counter++;
  }
  return counter;
}

foldsToTheMoon(384400000);

// function distanceToMoon(thickness){
// // let paperThickness = thickness*0.001
// // console.log(paperThickness)
// let moon = 384400 * 1000
// let result = 0;

// if(thickness < 0){
//   return 'NULL';
// }else {
//   result = moon/(thickness)*2
// }
// console.log(result);
// }

// distanceToMoon(0.0001);
// function counter() {
//   let num = 0;
//   return function(){
//     return num += 1;
//   }
// }
// const counterOne = counter();
// counterOne();
// counterOne();

// const counterTwo = counter();
// counterTwo();

// const abhishekRegularOrder = ['Mustard', 'Spinach']
// function createOrder(regular = []) {
//   // let sandwichOrder = [];

//   return function (ingredient){
//     regular.push(ingredient);
//     return regular;
//   }
// }
// const abhishekSandwhich = createOrder(abhishekRegularOrder);
// abhishekSandwhich('falafel');

// const newCustomerSandwhich = createOrder();
// newCustomerSandwhich('Mushroom');

// function createOrder(regular = []){
//   return {
//     addIngredient(ingredient) {
//       regular.push(ingredient){
//         regular.push(ingredient)
//       },
//     deleteIngredient(ingredient){
//       for(let i = 0; i<regular.length; i++){
//         if(regular[i] === ingredient){
//           regular.splice(i,1);
//           i--;
//         }
//       }
//     },
//     readIngredients(){
//       console.log(regular);
//     }
//     }
//   }
// }// function createOrder(regular = []){
//   return {
//     addIngredient(ingredient) {
//       regular.push(ingredient){
//         regular.push(ingredient)
//       },
//     deleteIngredient(ingredient){
//       for(let i = 0; i<regular.length; i++){
//         if(regular[i] === ingredient){
//           regular.splice(i,1);
//           i--;
//         }
//       }
//     },
//     readIngredients(){
//       console.log(regular);
//     }
//     }
//   }
// }

// const abhishekSandwhich = createOrder(abhishekRegularOrder);
// abhishekSandwhich('falafel');

// const newCustomerSandwhich = createOrder();
// newCustomerSandwhich('Mushroom');

// function createOrder(regular = []){
//   return {
//     addIngredient(ingredient) {
//       regular.push(ingredient){
//         regular.push(ingredient)
//       },
// function bankAccount -> starting balance 
// // return function => deposit or withdraw 

// function bankAccount(balance){
// // let balance = 0;
//   return function(action, amt){
//     if(action === 'deposit'){
//       return balance += amt;
//     }else if (action === 'withdraw'){
//       if(balance - amt < -50){
//         return 'No Go';
//       }
//       return (balance -= amt);
//     }
//   }
// }
// function bankAccount -> starting balance 
// // return function => deposit or withdraw 

// function bankAccount(balance){
// // let balance = 0;
//   return function(action, amt){
//     if(action === 'deposit'){
//       return balance += amt;
//     }else if (action === 'withdraw'){
//       if(balance - amt < -50){
//         return 'No Go';
//       }
//       return (balance -= amt);
//     }
//   }
// }// function bankAccount -> starting balance 
// // return function => deposit or withdraw 

// function bankAccount(balance){
// // let balance = 0;
//   return function(action, amt){
//     if(action === 'deposit'){
//       return balance += amt;
//     }else if (action === 'withdraw'){
//       if(balance - amt < -50){
//         return 'No Go';
//       }
//       return (balance -= amt);
//     }
//   }
// }
// let abhishekAccount = bankAccount(20);
// abhishekAccount('deposit', 80);
// abhishekAccount('withdraw', 1000);
//calculator Add / Subtract / Multiply / Divide 
// number = 0

// function calculator(){
//   let num = 0;
//   return {
//     add(val) {
//       return num+= val;
//     },
//     subtract(val) {
//       return num-= val;
//     },
//calculator Add / Subtract / Multiply / Divide 
// number = 0

// function calculator(){
//   let num = 0;
//   return {
//     add(val) {
//       return num+= val;
//     },
//     subtract(val) {
//       return num-= val;
//     },
//     multiply(val){
//       return num*= val;
//     },

//     divide(val){
//       return num/= val;
//     },
//     reset() {
//       num = 0;
//     }
//   }
// } 
//     multiply(val){
//       return num*= val;
//     },

//     divide(val){
//       return num/= val;
//     },
//     reset() {
//       num = 0;
//     }
//   }
// } 
// const calcOne = calculator();

// calcOne.add(10);
// calcOne.subtract(5);

// function motivation(firstname, lastname) {
//   var welcomeText = "You're doing awesome, keep it up";

//   // code message function here.
//   return function(firstname, lastname) {
//       //Uncommment this to return the value of your message function
//       return `${welcomeText} ${firstname} ${lastname}.`;
//   };
// }
// function motivation(firstname, lastname) {
//   var welcomeText = "You're doing awesome, keep it up";

//   // code message function here.
//   return function(firstname, lastname) {
//       //Uncommment this to return the value of your message function
//       return `${welcomeText} ${firstname} ${lastname}.`;
//   };
// }
/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Code here
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
function getUserById (users, id, cb){
  //console.log(users);
  console.log(users[0].id);
  for(let i = 0; i < users.length; i++){
    //console.log(users[i].id);
    if(users[i].id === id){
      return cb(users[i]);
    }
  }
}
// Do not edit the code below.


getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
// Do not edit the code above.
// In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Given one side of the DNA, you need to find the complementary side.

// DNAStrand("ATTGC") ==>  "TAACG"
// DNAStrand("GTAT")  ==>  "CATA"

function dna (str){
  
  let arr = [];
  
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'A'){
      arr.push('T');
    } else if(str[i] === 'T'){
      arr.push('A');
    }else if(str[i] === 'G'){
      arr.push('C');
    }else if(str[i] === 'C'){
      arr.push('G');
    }
  }
  return arr.join('');
  / Array Statement with switch case 

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

dna('ATTGC');

// Your task is to create an array of size n with the values of the Fibonnaci sequence, and reverse the order in which the sequence is displayed.

// For example: [1, 1, 2, 3, 5] would become [5, 3, 2, 1, 1]

// You can assume that n will always be a positive integer between and including, 1 and 64.

// pseduo code! 
// define a function that takes in a number
// looping through
// Create an array and loop through it 
// check the number before and two numbers before and add them 
// reverse my array 

function fibonnaci(n) {
  //let newNum - n-1;
  let newArr = [];

  for(let i = 0; i < n; i++){

    console.log(newArr, newArr[i-1], newArr[i-2]);

    newArr.push((newArr[i-1] || 1) + (newArr[i-2] || 0))
  }

  console.log(newArr);

  return newArr.reverse();
}
fibonnaci(10);

//     console.log(n);
//     //result.push(n, );
//   if(n < 65) {
//     //console.log(n);
//     return n
//   } 
//     return (sequence(n-1)+sequence(n-2))

  
//   //return result//.reverse();
//   //return result//.reverse();

// }

// sequence(5);

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
function groupBy(collection, predicate){   // pseudocode begins here:    
  // Depending on the second parameter function / string /    // what are we doing here?    // function - call the function and pass each item       // store it in a variable      // They will will be key for the object      // Value will be the item that we are at the iteration of the loop            // check the key alreay exist in the object         // If it does we have to add,       // Key    //& value (array)    
  // return the new object// function groupBy(collection, predicate){  var result = {};

    //var temp = [];
  //var key = [];
  
  if (typeof(predicate) === "function") {
    // Iterate over the array, using forEach
    //console.log(predicate);
        collection.forEach(function(item){
         if (result[predicate(item)]){
           result[predicate(item)].push(item);
           
         } else {
           result[predicate(item)] = [item];
         }
       });
     }
     if (typeof(predicate) === "string"){
      collection.forEach(function(item){
        if (result[item[predicate]]){
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
var firstLetter = function(word) { return word.charAt(0); };

var mathValue = function(val) { return Math.floor(val)};

console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'], firstLetter));
// returns { 'a': ['apple'], 'c': ['cat', 'card'], 'b': ['boat', 'bond'] }
console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'], 'length'));
// returns { '5': ['apple'], '4': ['boat', 'card', 'bond'], '3': ['cat'] }

console.log(groupBy([1.4, 5.6, 3.6, 1.8, 3.4], function(val) { 
  return Math.floor(val); 
}));

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function tellMeTime(seconds){
  
  let hours = checkLength(Math.floor(seconds/3600);
  let minutes = checkLength(Math.floor((sconds%3600)/60);
  let seconds = checkLength(seconds-(hours*3600)-(minutes/60));
  
  return `${hours}:${minutes}:${seconds}`
}
function checkLength(digit){
  if(('+digit').legth < 2) {return '0'+digit}
  return digit;
}

tellMeTime(3599);
// function tellMeTime(secondsVal){
// // var minutes = Math.floor(time / 60); And to get the remaining seconds, multiply the full minutes with 60 and subtract from the total seconds: var seconds = time - minutes * 60; Now if you also want to get the full hours too, divide the number of total seconds by 3600 (60 minutes/hour.Sep 17, 2010

// var secondsNum = parseInt(secondsVal, 10);

// var hours = secondsNum/3600 < 1 ? 00 : (secondsNum/3600);
// console.log(hours);

// var minutes = Math.floor(secondsNum/60);
// console.log(minutes);

// var seconds = (seconds-minutes)*60 || 00;
// console.log(seconds);
// return (`${hours}:${minutes}:${seconds}`); 

// }

// tellMeTime(359999) // 00:01:00


// function nameIt(seconds) {

// let min = 0,
//     hour = 0,
//     sec = 0;
// if(seconds){
//   if(seconds>=60){
//     min = Math.floor(seconds/60)
//     sec = seconds%60
//   }else {
//     sec = seconds;
//   }
//   if(min>=60){
//     hour = Math.floor(min/60)
//     min = min-hour * 60
//   }
// }
// }
// return `${hour}:${min}:${sec}`
// }

// nameIt(5999);
function sumTransactions(array1) {
  var sum = 0;
  var max = (array1[0].amount);
  
  //console.log (array1[0]);
  
  for (var i = 1; i < array1.length; i++ ) {
    //console.log(array1[0].amount);
    
    if (max < array1[i].amount) {
      console.log('max', max)
      console.log('amount', array1[i].amount);
      
      max = array1[i].amount;
    } 
    //console.log(array1[i]);
    //console.log(array1[i].amount);
    //console.log([i]);
    //sum += array1[i].amount;
  
  }
  
  



  function sumTransactions(array1) {
    var sum = 0;
    var max = (array1[0].amount);
    
    //console.log (array1[0]);
    
    for (var i = 1; i < array1.length; i++ ) {
      //console.log(array1[0].amount);
      
      
      
      if (max < array1[i].amount) {
        console.log('max', max)
        console.log('amount', array1[i].amount);
        
        max = array1[i].amount;
      } 
      //console.log(array1[i]);
      //console.log(array1[i].amount);
      //console.log([i]);
      //sum += array1[i].amount;
    
    }
    return max;
  }

  var transactions = [
    {
      name: "Tons of glitter",
      amount: 70
    },
    {
      name: "Porcelain Pink Flamingos",
      amount: 92
    },
    {
      name: "Chandelier replacement",
      amount: 10000,
    },
    {}

    var transactions = [
      {
        name: "Tons of glitter",
        amount: 70
      },
      {
        name: "Porcelain Pink Flamingos",
        amount: 92
      },
      {
        name: "Chandelier replacement",
        amount: 10000,
      },
      {},
      {
        name: "Dinner at TGIF x6",
        amount: 350
      }
    ];
    
    sumTransactions(transactions); // => 10512
    // Biller Builder
// You work for an e-commerce company that does business in New York and New Jersey. Due to differences in tax and shipping rates, the final bill for the same product is different for customers in the different states.

// The company has asked you to write a function that accepts a single parameter indicating a customer's state ('NY' or 'NJ') and returns a function that calculates the final bill for a customer in that state given the total list price of their items.

// The calculation of final bills are as follows:
// In New York, the final bill is calculated as the price of the item, plus a 3% shipping fee, plus a 9% sales tax assessed on the price of the item together with shipping costs.
// In New Jersey, the final bill is calculated as the price of an item, plus a 5% shipping fee, plus a 7% sales tax assessed on the price of the item together with shipping costs.
// So the final bill for a $100 item in New York would be: (100*1.03)*1.09 = 112.27 And in New Jersey: (100*1.05)*1.07 = 112.35

// function NY(){
//   return 1.03 * 1.09;
// }

// function NJ(){
//   return 1.05* 1.07;
// }
function biller(state){
  var bill = function(num){
  // return num * state();
  // }
    if(state === "NY"){
    return (num * 1.03) * 1.09;
    } else if(state === "NJ"){
    return (num * 1.05) * 1.07;
    } else {
    return "invalid State";
    }
  }
 return bill;
 }
 var newYorkBiller = biller('NY');
newYorkBiller(100)   // => 112.27

var newJersBiller = biller('NJ');
newJersBiller(100)    // => 112.35
const _ = require('lodash');

const purchases = [
  { month: "February", price: 37.85 },
  { month: "January", price: 73.24 },
  { month: "February", price: 61.41 },
  { month: "April", price: 41.07 },
  { month: "March", price: 34.5 },
  { month: "April", price: 68.52 },
  { month: "March", price: 44.53 },
  { month: "April", price: 44.95 },
  { month: "January", price: 72.86 },
  { month: "February", price: 58.96 },
  { month: "April", price: 88.62 },
  { month: "April", price: 32.53 },
  { month: "January", price: 61.02 },
  { month: "April", price: 22.92 },
  { month: "April", price: 79.4 },
  { month: "April", price: 13.23 },
  { month: "February", price: 26.31 },
  { month: "February", price: 74.3 },
  { month: "March", price: 28.76 },
  { month: "March", price: 85.51 },
  { month: "March", price: 75.88 },
  { month: "January", price: 22.83 },
  { month: "January", price: 44.39 },
  { month: "February", price: 22.04 },
  { month: "April", price: 56.89 },
  { month: "February", price: 86.19 },
  { month: "April", price: 87.99 },
  { month: "January", price: 14.25 },
  { month: "March", price: 60.8 },
  { month: "February", price: 23.65 }
];
const purchasesByMonth = _.groupBy(purchases, "month");
console.log(purchasesByMonth);

// for (key in purchasesByMonth) {
//   console.log(typeof key)
// }

purchases.map(e => e.price)


// _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
//   (result[value] || (result[value] = [])).push(key);
//   return result;
// }, {});



// console.log(purchasesByMonth.price)  
// const totalByMonth = _.reduce(purchasesByMonth, )
// async/await
// const axios = require('axios');

// async function getThePeople() {
//   try {
//   const data1 = axios.get('https://www.swapi.co/api/people');
//   const data2 = axios.get(`https://www.swapi.co/api/people`);
//   const data3 = axios.get('https://www.swapi.co/api/people');
//   return await Promise.all([data1, data2, data3]);
//   } catch(e) {
//     console.log(e);
//   }
// }
// (async function() {
//   const response = await getThePeople();
//   console.log(response);
// })()
// try {
//   doSomethingBroken();
// } catch (err) {
//   console.log(err);
// }
// function promiseGen() {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve('True');
//     } else {
//       reject('False');
//     }
//   });
// }
// promiseGen().then(res => console.log(res)).catch(err => console.log('err', err));

// throw new Error('You broke the things');

let arr =[]
console.log(arr.length)

var array1 = [5, 12, 8, 130, 44];
var array2 = ['hi','hello','abhi']

function findFirstLargeNumber(element) {
  return element === 'abhi';
}

var array1 = [5, 12, 8, 130, 44];
var array2 = ['hi','hello','abhi']

function findFirstLargeNumber(element) {
  return element === 'abhi';
}

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12
console.log(array2.findIndex(findFirstLargeNumber))

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12

// const user = {
//   name: 'abhishek',
//   sayName() {
//     return this.name;
//   }
// }

// // Implicit Binding 
// user.sayName();
// // Implicit Binding 
// user.sayName();


// function sayName(){
//   return this.name;
// }
// const user = {
//   name: 'abhishek',
//   sayName: sayName
// }

// const user = {
//   name: 'abhishek',
//   sayName() {
//     return this.name;
//   }
// }

// // Implicit Binding 
// user.sayName();


// function sayName(){
//   return this.name;
// }
// const user = {
//   name: 'abhishek',
//   sayName: sayName
// }
// const user2 = {
//   name: 'Jeff',
//   sayJeff: sayName
// }
// // user.sayName();

// user2.sayJeff();

//Implicit Binding 



//Explicit Binding

// function drive(){
//   return this.miles += 1;
// }

// const grandNational = {
//   make: 'Buick',
//   model: 'Grand National',
//   year: "'87",
//   miles: 0
// }

// const x5m = {
//   make: 'BMW',
//   model: 'X5M',
//   year: "2018",
//   miles: 0
// }

// drive.call(x5m,,,,);
// drive.apply(x5m, [,,,,]);

// const driveNational = drive.bind(grandNational);

// const driveBeemer = drive.bind(x5m);

// driveNational();
// driveNational();
// driveBeemer();


//Constructor functions 
// function Car(make, model, year){
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.miles = 0;
//   this.drive = function () {
//     return this.miles += 1;
//   }
// }

// const mustang = new Car('Ford', 'Mustang', 2001);

// console.log(mustang)

