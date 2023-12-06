// Promise is Javascript object, that is basically to resolve the problem of callback hell ie. pyramid hell by simplifying the writing async code in clean way. It has three states pending, resolve(fullfil) , and reject (failed)
// it is created using Promise construction to pass on callback function which takes two arguments as resolve and reject
// it invoke by then method of promise to handle resolve and catch for reject 
// Using this making call chain of promise to sequence order to handle asysnc code 
// There is all method to invoke the array of promise it resolve after all promise settled 
// Promise.All([]), Promise.race([])

//console.log(Math.floor(Math.random()* 10000)