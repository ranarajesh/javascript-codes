// Object method 

// Object.assign  is used to copy the properties of objects to passed as first parameter this method 
const obj = {
    name: 'Alex Smith',
    age: 30,
    address: 'CA, USA',
};

const obj1 = Object.assign(obj, {phone: 12333}, {pinCode : 11002});
console.log(obj1);
console.log(obj === obj1);
console.log(obj);

// make a copy of objects properties 
const obj2 = Object.assign({}, obj1);
console.log(obj2);
console.log(obj2 === obj1);

const objKeys = Object.keys(obj2);
console.log(typeof objKeys, objKeys.length);
for (const key of objKeys) {
    console.log(key);
}

const objValues = Object.values(obj2);
console.log(objValues);
for (const value of objValues) {
    console.log(value);
}

// Object.entries is essentialy combination of Object.keys, and Object.values return both entry in array with index of 0 and 1 respectively key, values 
console.log(Object.entries(obj2));


// Object.defineProperty
// Object.defineProperty(obj, propName, { value: value, configuration:  true, writable: true, enumerable: true})
Object.defineProperty( obj, 'testValue', { value: 17, writable: true,configurable: true, enumerable: true});

// writable not changed the value (if try silently failed) but can be delete the property

Object.defineProperty( obj, 'testValue', { value: 17, writable: false,configurable: true, enumerable: true});

console.log(obj.testValue);
obj.testValue = 22; // Failed silently 
console.log(obj.testValue);

delete obj.testValue ; // deletion still works
console.log(obj.testValue);

// Enumerable decide the property will be show up in iteration of object 
Object.defineProperty( obj, 'testValue', { value: 17, writable: true,configurable: true, enumerable: false});
for (const prop in obj) {
    console.log(prop);
    // if (Object.hasOwnProperty.call(obj, prop)) {
    //     const element = object[key];   
    // }
};

console.log("*".repeat(20));

// Configurable do two things deletion and allow to configuration property to further in future
// writable true to false work if configuration set to false but writable false to true not work (means generate error)

Object.defineProperty( obj, 'testValue', { 
    value: 17, 
    writable: false,
    configurable: false, 
    enumerable: true
});

console.log(obj.testValue); // silently fails
obj.testValue = 35;
console.log(obj.testValue);


try {
    Object.defineProperty( obj, 'testValue', { 
        value: 17, 
        writable: true,
        configurable: false, 
        enumerable: true
    });
} catch (error) {
    console.log(error);
}

console.log("*".repeat(50));
Object.defineProperty( obj, 'testValue1', { 
    value: 17, 
    writable: true,
    configurable: false, 
    enumerable: true
});
console.log(obj.testValue1);
obj.testValue1 = 35;
console.log(obj.testValue1);

Object.defineProperty( obj, 'testValue1', { 
    value: 17, 
    writable: false,
    configurable: false, 
    enumerable: true
});
console.log(obj.testValue1);
obj.testValue1 = 35; // silently fails
console.log(obj.testValue1);

// Please See: Setting writable & configuration --> false  object property make this freeze


// Object.preventExtensions : we cant add anything to object only change and deletion allow 
console.log("#".repeat(30));
const obj3 = {
    prop: 'value', 
    hello: "hello",
    world: "world"
}
Object.preventExtensions(obj3);
console.log(obj3);
obj3.nextProp = 8; // failed silently 
console.log(obj3);
obj3.prop = 4;
console.log(obj3);
delete obj3.prop;
console.log(obj3);
obj3.prop  = 12; // again fails silently 
console.log(obj3);

// checking object object extensibility 
console.log(Object.isExtensible(obj3));


// Locked prototypes using preventExtensions
console.log(Object.getPrototypeOf(obj3));
try {
    Object.setPrototypeOf(obj3, {})
} catch (error) {
    console.log(error);
}

// Property attributes (configurable, writable, enumerable) can still be changed through Object.defineProperty.
for (const key in obj3) {
    console.log(key);
}

Object.defineProperty(obj3, 'hello', {
    value: 200,
    enumerable: false,
    writable: false,
    configurable: false
})
console.log(obj3);
for (const key in obj3) {
    console.log(key);
}

// This (Object.preventExtension) will also works same for Array 
const arr = ['abc', 'def']
console.log('arr :>> ', arr);
Object.preventExtensions(arr)
try {
    arr[2] = 29; // this fails silently
    arr.push("ghi") // this will throw an error push, pop, shift and unshift
} catch (error) {
    console.log('error :>> ', error);
}

// this same goes for functions also 
function testFun(){
    this.name = "Paul"
}
testFun.testProp = 133;
console.log('testFun.testProp :>> ', testFun.testProp);
console.log('new testFun().name :>> ', new testFun().name);
Object.preventExtensions(testFun);
testFun.addProp = '3e43434';
for(let key in testFun){
    console.log("testFun -: key",key);
}
testFun.testProp = 49909
console.log('testFun.testProp :>> ', testFun.testProp);
console.log('new testFun().name :>> ', new testFun().name);
console.log('Object.isExtensible(testFun) :>> ', Object.isExtensible(testFun));
console.log('Object.getPrototypeOf(testFun) :>> ', Object.getPrototypeOf(testFun), testFun.prototype, testFun.__proto__);

function Test(){ this.test = 'dfsf'}
console.log(new Test().constructor, new Test().__proto__);


console.log("_".repeat(50));
// Object.seal  same as object.preventDefault + properties retain their writable and enumerable status, but they are still be deleted 
// Configurable is set to false for all properties (attemp to defineProperty will result in an error)

const obj4 = { 
    prop: 49
}
Object.seal(obj4);
console.log(Object.isSealed(obj4));
console.log(Object.isExtensible(obj4));
obj4.prop = 17;
console.log(obj4);
delete obj4.prop
console.log('obj4.prop :>> ', obj4.prop);
try {
    Object.defineProperty(obj4, 'prop', {
        value: 34,
        enumerable: true,
        writable: true, 
        configurable : true
    })
} catch (error) {
    console.log('error :>> ', error);
}


Object.freeze // Immutability
// This function allows us to truly freeze an object and make it immutable. When an object is frozen, we can’t add, remove, or change properties.

const freeze = {
    _val: 'value',
    get value(){ return this._val},
    set value(val) { this._val = val}
}
console.log('freeze.val :>> ', freeze.value);
freeze.value = 1000;
console.log('freeze.value :>> ', freeze.value);
Object.freeze(freeze);
freeze.value = 100033; // silently fails
console.log('freeze.value :>> ', freeze.value);


