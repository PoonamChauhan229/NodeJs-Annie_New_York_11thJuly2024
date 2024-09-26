const p1=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>{resolve("Timer1 started")},1000)
    }else{
        reject("Timer1 failed")
    }
})

const p2=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>{resolve("Timer2 started")},3000)
    }else{
        reject("Timer2 failed")
    }
})

const p3=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>{resolve("Timer3 started")},2000)
    }else{
        reject("Timer3 failed")
    }
})
p1.then((res)=>console.log(res)).catch((err)=>console.log(err))
p2.then((res)=>console.log(res)).catch((err)=>console.log(err))
p3.then((res)=>console.log(res)).catch((err)=>console.log(err))

// promise.all >> array
Promise.all([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>console.log(err))
// true >> u get all val
// false >> u get the err 


// https://restcountries.com/v3.1/all

// https://restcountries.com  >> Server 
// /v3.1/all                  >> Endpoint