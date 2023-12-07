function forEach(arr, fn) {
    for(let i=0;i<arr.length;i++){
        fn(arr[i], i, arr);
    }
}

forEach([1,2,32,3,2,2,,4], (a,b,c)=>{
    console.log(a, b,c );
})