// https://jsonplaceholder.typicode.com/todos  >> 3 min  ++
// https://jsonplaceholder.typicode.com/users  >> 2 min  ++
// https://jsonplaceholder.typicode.com/posts  >> 5 min  ++


// Promise.all([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>console.log(err))

// Promise.all >> 5 min >> [] >> fetch api 

let req1=fetch("https://jsonplaceholder.typicode.com/todos")
let req2=fetch("https://jsonplaceholder.typicode.com/users")
let req3=fetch("https://jsonplaceholder.typicode.com/posts")

// 3 url >> promise.all

Promise.all([req1,req2,req3]).then((res)=>{   
    // in a promise itself >> array [todos-read,users-read,posts-read]
    return Promise.all(res.map((element)=>element.json())) // convert into json 
    }).then(data=>{
        console.log(data)// array [todos,users,posts]
        const [todos,users,posts]=data // destructing 

        console.log("Todos",todos)
        console.log("Users",users)
        console.log("POsts",posts)
    })
 
