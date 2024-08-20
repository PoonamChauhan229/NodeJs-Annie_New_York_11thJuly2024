const arr=[1,2,-3,4]
//negative num
let hasNegative=arr.some((element)=>element<0)
console.log(hasNegative)
let display=hasNegative?"Yes, Present":"Not Present"
console.log(display)

// const arr1=[2,5,8,11,15,20,7,10] || [121,225,400]
// use methods 

//const arr1=[2,5,8,11,15,20] //find out the product of all elements

const arr3=[3,1,4]
const arr4=[5,2,6]
// o/p [1,2,3,4,5,6]

const str5="hello world"
// Hello World
let res=str5.split(" ").map((element,index)=>element.charAt(0).toUpperCase()+element.slice(1)).join(" ")
console.log(res)

let str1="listen"
let str2="silent"
// both strings are anagrams or not?
