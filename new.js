// Use of new keyword in oops is another way to invoke function as we want to return object from function call 


function fn(){
    
}
console.log(fn());
console.log(new fn());

function PersonConstructor(name, age){
    //  Internal working of this in function invokeed using new keyword. We call it functional constructor

    // this = {};
    // this.__proto__ = PersonConstructor.prototype;
    // if (there is a return statement in the 
    //     function body that returns anything EXCEPT an Object, array, or function){
    //     return 'this' ( the newly constructed object 
    //         instead of that item at the return CSSLayerStatementRule;)
    // }
    
    this.age = age;
    this.name = name;
    // return this;
}

const person = new PersonConstructor('Rajesh', 35);
console.log(person);
console.log(person.constructor);
console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));
console.log(person.prototype);
console.log(person.__proto__ === PersonConstructor.prototype);


function add(){
    const t = [].slice.call(arguments);
    
    console.log(t, typeof t, t instanceof Array, Array.isArray(t), t.constructor=== Array);
}
add(1,2,3,2,2,3)

var fnBound = add.bind({1:11,2:22}, "FSDF", 'FDFD');
console.log(fnBound);
console.log(fnBound());

