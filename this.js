const obj1 = {
    str: 'Hello!',
    fn: function() {
        console.log(this);
    }
};

obj1.fn()
function testThis(){
    // console.log(this);
}

testThis()

const obj = {
    counter: 0,
    incrementCounter: function() {
        this.counter++;
        this.logCounter();
    },
    logCounter: function() {
        console.log(this.counter);
    }
    , 
    test: () => { console.log(this)}
};

obj.incrementCounter(); // -> 1
obj.incrementCounter(); // -> 2
obj.incrementCounter(); // -> 3
obj.test()