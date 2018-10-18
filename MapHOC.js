const prices = [15.0, 23.0, 78.0, 34.0, 12.0, 86.0, 12.0, 79.0, 32.0];

let postTaxPrices = prices.map(price => price * 1.07);

const orders = [
  { price: 15, tax: 0.09 },
  { price: 42, tax: 0.07 },
  { price: 56, tax: 0.11 },
  { price: 80, tax: 0.11 },
  { price: 69, tax: 0.06 },
  { price: 68, tax: 0.14 },
  { price: 72, tax: 0.14 },
  { price: 51, tax: 0.09 },
  { price: 89, tax: 0.15 },
  { price: 48, tax: 0.13 }
];
// Do not edit code above.

/*
  Use a higher order method to get the sum of all the order totals after adding in the sales tax
*/

let ordersTotal = orders.map(order => (order.price += order.price * order.tax));

let numbers = [5, "9", 16, 19, "25", "34", 48];

/*
  Write a function called addTen that is given 'numbers' as it's only argument.
  Return a new array after adding ten to each item in numbers. 
  *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]
*/

//Code Here
function addTen(numbers) {
  let array = numbers.map(elem => {
    return parseInt(elem) + 10;
  });
  return array;
}
