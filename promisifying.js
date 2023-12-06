// Promisifying we can make promisifying a non-promise using Promise constructor. As we know promise takes a callback, which iteself takes in a callback parameter resolve. 
//We want to set up the callback we provide to Promise such that it calls its resolve parameter when it has the data it needs. So, after the function operation is complete, we want to call resolve with the data we get out of it.

const readFile= (filenName) => {
    return "file is reading from "+filenName;
}
const readFilePromise =  new Promise( resolve => {
    resolve(readFile("readFile.txt"));
})

readFilePromise.then( content => console.log(content + "----"+ Date.now()))