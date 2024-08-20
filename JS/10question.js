// Print the two values of X after rounding off to 2 decimal places if required.

// Sample Input :
// 1 5 6
// 2 10 12

let a=1
let b=5
let c=6


// {-b + √(b² - 4ac) } / 2a 

// {-b - √(b² -4ac)} / 2a

// b² - 4ac =
let x=(Math.pow(b,2))-(4*a*c)
let y=Math.sqrt(x)
console.log(y)
// Math.sqrt(34)
let q1=((-b+y)/2*a).toFixed(2)
let q2=((-b-y)/2*a).toFixed(2)
console.log(q1,q2)

// Sample Output :
// -2.00
// -3.00


// [7, 9, 0, -2]
// -2
// [9, 0, -2]
// [7, 9, 0, -2]


// parseInt()
// parseFloat()

// // parse >> Converting 
// // Int >> Integer 

// //Converting into Integer
// parseInt(2.2)
// 2
// parseInt(2.6)
// 2
// parseInt(2.9)
// 2
// parseInt(2.0)
// 2
// parseInt("2")
// 2
// parseInt("2.2")
// 2
// parseInt("2.7")
// 2
// parseInt("2A")
// 2
// parseInt("2 A")
// 2
// parseInt("2489 A")
// 2489
// parseInt("24A89 A")
// 24
// parseInt(" A24A89 A")
// NaN
// parseInt("2 4A89 A")
// 2
// parseInt(" 2 4A89 A")
// 2

let arr=["2A","45B","67","89A89"]
// ask you convert it in a integer
// double it
const intVal=arr.map((element,index)=>parseInt(element)*2)
console.log(intVal)
//[ 2, 45, 67, 89 ]
//[ 4, 90, 134, 178 ]

parseFloat(2.5)
2.5
parseFloat("2.5")
2.5
parseFloat("2.5A")
2.5
parseFloat("A2.5A")
NaN
parseFloat("2.5A")
2.5

// Number()
// conditions || criteria

Number(2)
2
Number(2.2)
2.2
Number("2.2")
2.2
Number("2.26")
2.26
Number("2.26A")
NaN
Number("2.2 6")
NaN
Number(" 2.26")
2.26
Number(" 2 .26")
NaN
Number(" 2 A.26")
NaN
parseFloat("2")
2
parseFloat("2")
2
parseFloat("2.2")
2.2
parseFloat("2")
2
parseFloat("2.2A")
2.2
Number("2.2A")
NaN
