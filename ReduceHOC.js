const purchases = [
  { owner: "Barry", price: 103 },
  { owner: "Bob", price: 75 },
  { owner: "Bob", price: 73 },
  { owner: "Barry", price: 57 },
  { owner: "Barry", price: 128 },
  { owner: "Bob", price: 119 },
  { owner: "Barry", price: 133 },
  { owner: "Barry", price: 27 },
  { owner: "Barry", price: 138 },
  { owner: "Bob", price: 68 },
  { owner: "Bob", price: 50 },
  { owner: "Barry", price: 9 },
  { owner: "Bob", price: 123 },
  { owner: "Bob", price: 135 },
  { owner: "Barry", price: 30 },
  { owner: "Barry", price: 129 },
  { owner: "Barry", price: 38 },
  { owner: "Bob", price: 133 },
  { owner: "Barry", price: 109 },
  { owner: "Bob", price: 115 }
];
// Do not edit the code above.

/*
  Use a high order method to create to get the sum of bobsTotal.
*/

let bobsTotal = purchases.reduce((total, own) => {
  if (own.owner === "Bob") {
    total += own.price;
  }
  return total;
}, 0);
