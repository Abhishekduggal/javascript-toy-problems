// 1 = 00000001
// 2 = 00000010
console.log(1 | 2); // Bitwise OR

console.log(1 & 2); // Bitwise AND

// Access Control System Practice

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | readPermission | writePermission;

// Bitwise OR operator we can assign permission
// Bitwise AND operator we can check persmission

let message = myPermission & readPermission ? "Yes" : "No";

console.log(message);
