// Async token is used to defined the function that is more cleaner way to handle async code. this is function with specified the async keyword in front of function. This function is always return promise in comparison the normal function. 
// Await keyword is used inside the async function only. It invoked the promise and pause the execution in a function to go next instruction untill promise reject or resolve. This is more like to async code in synchronous way. 

async function asyncFun(){
    const rand = Math.floor(Math.random() * 10 - 1 + 1);
    
        return new Promise( (resolve, reject)=>{
            if(rand > 5){
                resolve(rand);
            }else{
                reject(rand)
            }
        })
    

}

console.log(asyncFun);
console.log(asyncFun());
console.log(asyncFun().then( v => console.log("value", v)).catch(e => console.log("handle catch in",e)));

const func = async function(){
    console.time('Async');
    let promise1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('timeout1 for 3 seconds');
          resolve('done');
        }, 3000);
      })
    
      await promise1;
    
      let promise2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('timeout2 for 5 seconds');
          resolve('done');
        }, 5000);
      })
      
      await promise2;
    
      let promise3 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('timeout3 for 1 seconds');
          resolve('done');
        }, 1000);
      })
    
      await promise3;
      console.timeEnd("Async");
}

func()

const trueParallel = async function(){
    const result = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('timeout3 for 1 seconds');
          resolve('done');
        }, 1000);
      }).then(v => console.log(`1st call result ${v}`));
      const result2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('timeout3 for 1 seconds');
          resolve('done');
        }, 1000);
      }).then(v => console.log(`2nd call result ${v}`));;

      
}

trueParallel()