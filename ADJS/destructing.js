// Unpacking items from array || objects

// Array
const arr1=["John","Doe","Example"]
console.log(arr1[0])
console.log(arr1[1])

//destructing
const [Fname,Lname,test]=arr1
console.log(Fname)
console.log(Lname)
console.log(test)


// Object Destructuring

const obj1={
    name:"Annie",
    friend:"Poonam",
    course:"Nodejs"
}
console.log(obj1.name)
console.log(obj1.friend)
console.log(obj1.course)

//destructure
const {name,friend,course}=obj1
console.log(name)
console.log(friend)
console.log(course)