class Manager extends Employee {
  constructor(first_name, last_name, email, age, reports) {
    super(first_name, last_name, email, age);
    this.reports = [];
  }
  hire(employee) {
    this.reports.push(employee);
  }
  fire(i) {
    this.reports.splice(i, 1);
  }
}

var mang1 = new Manager("Abhi", "Duggal", "manager@gmail.com", 36, 0);
