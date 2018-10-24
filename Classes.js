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

class ProgressiveManager extends Manager {
  constructor(first_name, last_name, email, age, reports, title, bonus) {
    super(first_name, last_name, email, age, reports);
    this.title = "Not a manager";
    this.bonus = 0;
  }

  setTitle(emp) {
    if (emp === 0) {
      return "Not a manager";
    } else if (emp >= 1 && emp <= 3) {
      return "Barely Manager";
    } else if (emp >= 4 && emp <= 10) {
      return "Mostly Manager";
    } else if (emp >= 11 && emp <= 50) {
      return "Manager";
    } else if (emp >= 51 && emp <= 100) {
      return "Manager Plus";
    } else if (emp >= 101) {
      return "Bestest Manager";
    }
  }
}
