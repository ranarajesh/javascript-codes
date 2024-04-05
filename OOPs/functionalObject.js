function Employee(name, age, designation){
    this.name = name;
    this.age = age;
    this.designation = designation;

    // private properties 
    var _salary = 1000;
    this.salary = function(){
        return _salary;
    }
    
    // this.company = "Google"; // better way to add this in prototype  which share its prototype object

    // Defining Methods
    this.display = function(){
        console.log(`name is : ${this.name}`);
    }



}
Employee.prototype.company = "Google";
var emp1 = new Employee("Joe", 23, "Developer Manager");
var emp2 = new Employee("Viksa", 34, "Engneering Manager");
console.log(emp1);
console.log(emp2);
emp1.display()
emp2.display();

console.log(emp1.__proto__);
console.log(Employee.prototype, Employee.prototype);

console.log(emp1.salary());