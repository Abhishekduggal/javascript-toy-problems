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
