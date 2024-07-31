
1
2
3
4
for(let i=1;i<5;i++){
    console.log(i)
}
console.log("New Loop")
let arr=[30,40,80,90]
// on this basis to run the loop 
// loop > i=0  >>> index no
// arr > starts indx 0
// arr > ends   arr.length
// access value > arr[indexno]  >> arr[i]
for (let i=0;i<arr.length;i++){
    console.log(i,"-",arr[i])
}
console.log("New loop")
// Modify each array element to 40 50 90 100
// increase the each element vale by 10
for(let i=0;i<arr.length;i++){
    console.log(i,"-",arr[i],"Modify val -",arr[i]+10)
}
// calculate the sum of the arry  >> 240 >> Challenge 30+40+80+90  >> using a loop
// temp var >arrValue
// for loop
// start point >0
// end point > arr.lemgth
// increment/decrement
// calculation > arrValue=arrValue+arr[i]
// loop terminates
// finally printing the value> console.log(arrValue)
// Total 9 steps inorder to get the sum of any array


//modify the value of array
// temp variable > in an array
// for loop
// start point >0
// end point > arr.lemgth
// increment/decrement
// calculation > arrValue=arr[i]+10
// loop terminates
// finally printing the value> console.log(arrValue)
// Total 9 steps inorder to get the sum of any array


// Array Methods
// > work on a array
// > it use the methods provode by JS

// MRF
// MAP
// REDUCE
// FILTER

// OTHER METHODS

// MAP
//arrayName.map() >> arr25.map((element,index)=>//block of code )
// arrName.map(()=>{})
//function as a parameter
//    > 2 parameter > element,index
//modifies the original array > in 1 line
// returns an new array
// arr=[30,40,80,90] || 30-0

console.log("Map Method")
arr.map((element,index)=>console.log(element,"-",index))

console.log("Transform and print in an New Line")
arr.map((element,index)=>console.log(element+10,"-",index))

console.log("Transform and print in an array")
let arrMap1=arr.map((element,index)=>element+10)
console.log(arrMap1)

console.log("Transform and print in an array")
//[40,51,92,103]
let arrMap2=arr.map((element,index)=>element+10+index)
console.log(arrMap2)

//array of objects >> Real World >> array of objects
let arr2=[
    {
        name:"Alice",
        marks:78
    },
    {
        name:"Bob",
        marks:89
    },
    {
        name:"John",
        marks:100
    }
]
// +20 > marks >> map

// FILTER
console.log("Filter Method")
let newarr=[40,51,92,103]
// Find even and odd num?

// newarr.filter((element,index)=>{})
// function as an arg > element, index
// it only truthy valuse
// falsy values ignored
// it returns in an array

const evenArray=newarr.filter((element,index)=>element%2==0)
console.log(evenArray)

const oddArray=newarr.filter((element,index)=>element%2!==0)
console.log(oddArray)

let arr3=[
    {
        name:"Alice",
        marks:78
    },
    {
        name:"Bob",
        marks:89
    },
    {
        name:"John",
        marks:100
    }
]

const evenStudents=arr3.filter((element,index)=>element.marks%2==0)
console.log(evenStudents.map((element,index)=>element.name))

console.log("Reduce Method")
//reduce
let arr5=[10,78,56,90,45,67] //346
// arr5.reduce((acc,element)=>{})
// acc > accumulator >> value gets accumulted > newarrVal
// elemnt > element of an array

let sum=arr5.reduce((acc,element)=>acc+element)
console.log(sum)

// without acc val  acc  >>0
// acc     element
// 10        78
// 88        56
// 144       90
// 234       45
// 279       67
// 346

let sum1=arr5.reduce((acc,element)=>acc+element,4)
console.log(sum1)
// with acc value acc > 4 
// acc     element
// 4         10
// 14        78
// 92        56
// 148       90
// 238       45
// 283       67
// 350


//Push Method
// it will be add element to last

let arr67=[10,30,89]
arr67.push(78,90,89,67,"hello")
console.log(arr67)

//unshift() // add the n no of elements in the begining
let arr70=[78,56,78,45]
arr70.unshift(90,67)
console.log(arr70)


//Pop method > Remove the last
let arr68=[90,67,89]
arr68.pop()
console.log(arr68)
arr68.pop()
console.log(arr68)

//shift() // removes the first
console.log("shift")
let arr69=[89,78,67,56]
arr69.shift()
console.log(arr69)


console.log("Every Method") // We give the condition which should satisfy for all element > true
//every  >> boolean true | false >> 
let arr71= [1, 30, 69, 29, 10, 13];
let everyMethod=arr71.every((element)=>element>40)
console.log(everyMethod)

//some   >> boolean > true | false
let someMethod=arr71.some((element)=>element<40)
console.log(someMethod)

//concat  > bringing together > array
let arr90=[67,90]
let arr91=[91,87,56]
let arr92=[89,79,60]
let arrconcat=arr90.concat(arr91,arr92)
console.log(arrconcat)
let arrconcat1=arr92.concat(arr90,arr91,560,"cbv")
console.log(arrconcat1)


//join > bring together > string || be default it will use , as seperator
let arr93=["Fire","Air","Water"]
console.log(arr93.join())
console.log(arr93.join(" "))
console.log(arr93.join(" @ "))
console.log(arr93.join(" one "))
console.log(arr93.join(" - "))
console.log(arrconcat1.join(" "))

console.log("slice method")
//slice  > strt index(included) , end index(excluded)

let arr94=["Fire","Air","Water","Ant","Lion","Sheep","Camel"]
//            0     1      2      3      4     5        6       
console.log(arr94.slice(2))
console.log(arr94.slice(2,4))
console.log(arr94.slice(1,5))
console.log(arr94.slice(0,5))

console.log("splice method")
// splice > place(index)+ remove(del count) + add(element)
let arr95=["Jan","Feb","Mar","Apr","May","Jun","Jul"]
//           0     1     2     3     4     5     6 
//arr95.splice(1,0,"Poonam")
//arr95.splice(1,1,"Anny")
//arr95.splice(1,2,"Anny")
arr95.splice(4,2,"Anny")
console.log(arr95)

// reverse()
console.log(" reverse() Method")
// let arr96=["one","two","three"]
let arr96=[23,45,89]
console.log(arr96.reverse())

// ["A","N","N","Y"] >> YNNA

// sort () >> ASCENDING ORDER + string > checks the 1st char as per ascii || number >0-9 or it checks the 1st digit of the number
let arr97=["Jan","Feb","Mar","Apr","May","Jun","Jul"]
console.log(arr97.sort())

let arr98=[1,45,23,100,90,10000]
console.log(arr98.sort())

let arr99=[6,9,4,5,7,1,3]
console.log(arr99.sort())

//includes() > boolean
console.log("includes")

let arr100=[6,9,4,5,7,1,3]
console.log(arr100.includes(9))
console.log(arr100.includes(90))
console.log(arr97.includes("Dec"))
console.log(arr97.includes("Jan"))
console.log("find")
//find() > value || 1st vale if it matches otherwise undefined
console.log(arr100.find((element)=>element==0))

console.log("Fill")
// fill() > original array is changed + updates the element
let arr101=[10,20,30,40,50]
console.log(arr101.fill(67))
console.log(arr101.fill(80,1))
console.log(arr101.fill(180,3))
console.log(arr101.fill(140,1,4))// until /upto 

let arr21=Array(3).fill(90)
console.log(arr21)

// at()
// forEach()
console.log("Monday Session")
// map()
//[1,2,3,4] >> [1,4,9,16]
// 1*1
// 2*2
// 3*3

const arr121=[1,2,3,4]
let res121=arr121.map((element,index)=>element*element)
console.log(res121)

// foreach
const arr122=[1,2,3,4]
arr122.forEach((element,index)=>console.log(element*element))
let res122=arr122.forEach((element,index)=>(element*element))
console.log(res122)

//at
console.log(arr122[2])// with normal arr[indx]

let index=2;
console.log(arr122.at(index))// pass the indexno and it gives u the element
console.log(arr121.at(3)) // at()
