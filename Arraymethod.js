function forEach(arr, fn) {
    for(let i=0;i<arr.length;i++){
        fn(arr[i], i, arr);
    }
}

forEach([1,2,32,3,2,2,,4], (a,b,c)=>{
    console.log(a, b,c );
})

const arr = ['a', 'b', 'c', 'd'];

arr.reduce((accu, item, index, arr) => {
    console.log(typeof accu);
    console.log(`accu -${accu} item -${item} index -${index} arr -${arr}`);
    return accu + item;
})

function reduce(arr, fn, accu) {
    let index = 0;
    if(accu === undefined){
        accu = arr[0];
        index = 1;
    }
    for(; index<arr.length; index++){
        accu =  fn(accu, arr[index], index, arr)
    }
    return accu;
    
};
const result = reduce(arr, (a, n, i, arr) => {
  return a + n;
}, 'z')
console.log(result);

function isSubSet(arr1, arr2){
    return arr1.reduce( (bool, nextItem) => {
        if(bool == false) return false;
        return arr2.includes(nextItem);
    }, true)
}

function isSubSetShort( arr1, arr2){
    return arr1.reduce( (bool, nextItem) => bool == false? false: arr2.includes(nextItem), true)
}
var result1 = isSubSetShort(
    ['abc', 17, 'def'],
    ['def', 'abc', null, 17, 24]
); 
console.log(result1);


function isSubSetUsingForEach( arr1, arr2){
    let subSet = true;
    arr1.forEach(item => {
        if(!arr2.includes(item)) subSet = false;
    });
    return subSet;
}
console.log(isSubSetUsingForEach(
    ['abc', 17, 'def'],
    ['def', 'abc', null, 17, 24]
));