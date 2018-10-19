/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

//Code Here

function each(arr, cb) {
  arr.forEach((element, i) => {
    return cb(element, i);
  });
}

// Do not edit the code below.
each(names, function(item, indice) {
  console.log("The item in the " + indice + " position is " + item);
});
