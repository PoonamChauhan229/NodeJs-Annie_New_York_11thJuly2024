// async await 

// adjs 
// callback >>> nodejs
// promise >> node js 

// async await >>>    
// async >> asynchronous 
// await >> waiting
// wait untill the async ops is completed
// async await always works with function

// normal
async function functionName(){
    // it is going time >> await for the ops 
}

// arrow function
const function2Name=async()=>{}
____________________________________
// sync ops 
//  1st line > 0.1ms   > execute
//  2nd line > 0.1ms   > execute
//  3rd line > 5 min   > time consume (execute after 4-5 min)    
//  4th line > 0.1ms   > blocked for 5 min
//  5th line > 0.1ms   > blocked for 5.01 min


// async ops 
//  1st line > 0.1ms   > execute
//  2nd line > 0.1ms   > execute
//  3rd line > 5 min   > time consume (execute after 4-5 min)   >> async and await(5 min >> have data) 
//  4th line > 0.1ms   > execute
//  5th line > 0.1ms   > execute

 // async-await  usage>> api +db + third party services >> 
