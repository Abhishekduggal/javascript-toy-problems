function oddOrEven(array) {
  // Iterate over the array
  // Sum of all values
  // Store the sum in a temp value
  // Check whether the number is odd or even - if/else
  // Return the answer in string format 'odd' or 'even'

  var temp = 0;

  array.forEach(function(item) {
    console.log(item);
    temp += item;
  });
  console.log(temp);

  if (temp % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
