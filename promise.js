// Promise is Javascript object, that is basically to resolve the problem of callback hell ie. pyramid hell by simplifying the writing async code in clean way. It has three states pending, resolve(fullfil) , and reject (failed)
// it is created using Promise construction to pass on callback function which takes two arguments as resolve and reject
// it invoke by then method of promise to handle resolve and catch for reject 
// Using this making call chain of promise to sequence order to handle asysnc code 
// There is all method to invoke the array of promise it resolve after all promise settled 
// Promise.All([]), Promise.race([])

//console.log(Math.floor(Math.random()* 10000));
//console.log(Math.floor((Math.random() * 10) +5));
// Math.random() * (highestNumber - lowestNumber) + lowestNumber


function random(highestNumber, lowestNumber){
    return Math.floor( Math.random() * highestNumber - lowestNumber + lowestNumber );
}


const promise = new Promise((resolve, reject) => {
    const rand = random(10, 1);
    if(rand < 5) {
        setTimeout(() => {
            
            resolve(rand)
        }, rand);
    }else{
        setTimeout(() => {
            
            reject(rand)
        }, rand);
    }

});

promise.then( val => console.log(val))
.catch( e => console.log(e))

//chain of promise 
promise
.then(val => {
    console.log("---------------");
    console.log(val);
    console.log("---------------");
    return val + val;
})
.then(val => {
    console.log(val);
    console.log("---------------");
    const r = val + val;
    if(r > 15 ) throw r;
    return r;
})
.then(val =>{
    console.log(val);
    console.log("---------------");
    console.log(3*val);
})
.catch(e => console.log(`Error in chain of loop ${e}`))


// all promise
var newProm = function(){
    const timeout = random(5000, 500);
    return new Promise( (resolve, reject) =>{
    setTimeout(() => {
        resolve(timeout)
    }, timeout);
})
} 
const promArr = [newProm(), newProm(), newProm()]

console.time("test");
Promise.all(promArr)
.then( arr => {
    console.log('arr value and length',arr,arr.length);
    console.timeEnd("test");
})
.catch(e => console.log("IN promise all method"))

console.log("it will call before promise");


// Promise with race method 

Promise.race(promArr)
.then(raceItem => console.log("value of race item is", raceItem))