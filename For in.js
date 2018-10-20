////////// PROBLEM 2 //////////

/*
  Write a function called greaterThan10 that takes in an object. 
  Write a for in loop that loops over the object and changes any value that is great than 10 to 0. 
  Return the updated object.
*/

//Code Here
function greaterThan10(obj) {
  for (var prop in obj) {
    if (obj[prop] > 10) {
      obj[prop] = 0;
    }
  }
  return obj;
}
