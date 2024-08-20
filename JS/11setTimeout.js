// setTimeout()
// setInterval()

// synchronous + line by line code execution

// wat ? asynchronous 
// synchronous >>> blocks our code
// execution line >> 10 min 
// whole operation >> delayed by 10 min
// whenever we know, take time >>> async operations
// choose > async >>> 10 min  >>> it will pass control to the next line ...it will allow to exceute remaining code
// async >>> operation wont be delayed 

console.log(1+1)//1 ms
console.log(20000000+2345678909876543)//2ms
console.log(3+3)//1ms

//setTimeout()
//method >> which is going to execute only once after a delay 
// arrow function 
//setTimeout(()=>{},delay(time in milliseconds))
// 1sec= 1000ms

console.log(1)//0.1 ms
setTimeout(()=>{
    console.log("Setimeout called after few sec 1")// 2sec >> async// 0.1 ms
},2000)
setTimeout(()=>{
    console.log("Setimeout called after few sec 2")// 0sec >> async// 0.1 ms
},0)
setTimeout(()=>{
    console.log("Setimeout called after few sec 3")// 0sec >> async// 0.1 ms
})
console.log(2)//0.1ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(2)//0.1ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(2)//0.1ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms
console.log(1)//0.1 ms

// trust issues 

// nodejs
// client >> req >> server(api url)>> db 
// server >> res >> asked data sent to client
// process will take time
// time || ignore time >> async operation

// 1 to 10
// when  10 >> Happy Anniversary!!!
// 1
// 2
// 3
// ....10 
// setimeout 
// setTimeout(loop)
// loop(setTimeout)



