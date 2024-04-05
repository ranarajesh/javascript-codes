var employee = {
  
    name: 'Joe',
    age: 28,
    designation: 'developer',
    //function returning designation of the employee
    display() {
        console.log("fdfsf");
        console.log(this);
      return designation //using this to refer to the "employee" object
    },
    arrow :()=>{
        console.log(' this of arrow :>> ', this);
        return designation;
    }
    , get display1(){
        return this.designation
    }, 
    set display1(designation){
        this.designation = designation;
    }
  }

  var designation = "Developer";
  console.log('employee.display() :>> ', employee.display());
  console.log('employee.arrow() :>> ', employee.arrow());
  console.log(employee.display1);
  employee.display1 = "Team Lead";
  console.log(employee.display1);
