// promise
//api
//promise+api

//promise >> oath 
//Promise > 3 STATES
/*
Promise 
> Object  > new keyword 
> synchronous (line by line )and asynnchronus operations (wont block ur code)
> Allows us to write async operations
> execution/failer of asyn operations > promise

Pending STate   > Initial State  >> Pending 
Fulfilled State > Resolved       >> Value(Response)      >> get the proper data  >> .then()
Rejected State  > Rejected       >> error(ErrorResponse) >> handle the error     >> .catch()

*/
//2+2 =4
if("condition"==4){
    console.log("Execution successful")// resolved state
}else{
    console.log("Execution failed") // reject state >> error 
}

const p=new Promise(()=>{}) //()=>{}
console.log(p)// {pending}
//cbk >> params >> resolve , reject

const p1=new Promise((resolve,reject)=>{
    resolve("Promise executed")
})
console.log(p1)

// const p2=new Promise((resolve,reject)=>{
//     reject("Promise Failed")
// })
// console.log(p2)

// .then()>> values  .catch() >> err+handling err
const p3=new Promise((resolve,reject)=>{
    resolve("We can start over on ....")
})
//console.log(p3)
p3.then((res)=>console.log(res))

const p4=new Promise((resolve,reject)=>{
    reject("We are in failing in the test...")
})
// console.log(p4)
p4.catch((err)=>console.log(err))


let p5=new Promise((resolve,reject)=>{
    if(true){
        resolve("Welcome back")
    }else{
        reject("Access Not Granted")
    }
})
//console.log(p5)
p5.then((res)=>console.log(res)).catch((err)=>console.log(err))