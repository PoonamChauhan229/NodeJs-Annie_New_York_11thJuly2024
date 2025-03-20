// https://jsonplaceholder.typicode.com/todos  >> 3 min  ++
// https://jsonplaceholder.typicode.com/users  >> 2 min  ++
// https://jsonplaceholder.typicode.com/posts  >> 5 min  ++


// Promise.all([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>console.log(err))

// Promise.all >> 5 min >> [] >> fetch api 

// using promise

let req1=fetch("https://jsonplaceholder.typicode.com/todos")
req1.then((data)=>data.json())
.then((res)=>{
       console.log(res)
})

let req2=fetch("https://jsonplaceholder.typicode.com/users")
req2.then((data)=>data.json())
.then((res)=>{
        console.log(res)
})

let req3=fetch("https://jsonplaceholder.typicode.com/posts")
req3.then((data)=>data.json())
.then((res)=>{
       console.log(res)
})

