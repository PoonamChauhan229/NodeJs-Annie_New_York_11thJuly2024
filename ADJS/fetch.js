console.log(1)
// API
// XMLHttpRequest() >> interacting with the server
// fetch()
// The fetch() function returns a Promise

let req=fetch("https://restcountries.com/v3.1/all")
 // fetch returns a promise  >> 1 argument required, but only 0 present.
  
// req.then((data)=>data.json()).then((res)=>console.log(res))
//.json() >> convert string to json 

console.log(req)// promise >> fulfilled >> data >>Readaable stream >> .json() >>.then()// actual 
// req.then((data)=/>console.log(data.json()))
// response
req.then((data)=>data.json())
.then((res)=>{
        //console.log(res) >> 250 array
        for(let i=0;i<res.length;i++){
            // console.log(res[i])// indival response  >> 
            console.log(`Area is ${res[i].area} and Region is ${res[i].region}`)
        }

        // map method >> show the same data
        // foreeach loop >>
        // res.map((element,index)=>{
        //     console.log(element)
        // })

        // // foreach
        // res.forEach(element => {
        //     console.log(element)
        // });

    })

//  JSON >> REpresentation for an object
var obj={
    name:"abc",
    age:21
}
console.log(obj)

var jsonObj={
    "name":"abcd",
    "age":210
}