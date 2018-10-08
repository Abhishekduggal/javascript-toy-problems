var arr = [1, 2, 3]; //define an array arr contains elements 1 2 3
arr.push(4); //add element 4 to arr
console.log(arr); //[1,2,3,4]
arr.pop(); //remove the last element from arr
console.log(arr); //[1,2,3]

function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  arr.push(el);
  return arr;
}
function popElement(arr) {
  arr.pop();

  return arr;
}
