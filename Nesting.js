var employees = [
  {
    firstName: "Von",
    lastName: "Budibent",
    email: "vbudibent0@163.com",
    department: "Sales"
  },
  {
    firstName: "Catherina",
    lastName: "Swalowe",
    email: "cswalowe1@example.com",
    department: "Engineering"
  },
  {
    firstName: "Theo",
    lastName: "Trill",
    email: "ttrill2@sina.com.cn",
    department: "Services"
  },
  {
    firstName: "Elsy",
    lastName: "McCrorie",
    email: "emccrorie3@netscape.com",
    department: "Legal"
  },
  {
    firstName: "Lorie",
    lastName: "Handsheart",
    email: "lhandsheart4@fotki.com",
    department: "Research and Development"
  }
];
// Do not edit the code above.

/*
    Create a function called 'employeeUpdater' that takes no parameters. employeeUpdater will loop over the array above and perform the following:
      1. If employee's first name is Theo, remove that employee because he just got fired.
      2. If the employee's first name is Lorie, change her department to 'HR'.
      3. Return the updated employee array.
  */

//Code Here

function employeeUpdater() {
  // employees.forEach(function(emp) {
  //   console.log(emp);
  // });
  var remove = employees.filter(function(employee) {
    console.log(employee.firstName);

    if (employee.firstName === "Lorie") {
      employee.department = "HR";
    }
    return employee.firstName !== "Theo";
    //console.log(employee);
  });
  return remove;
}
