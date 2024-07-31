// JS
// PRimitive
// SIngle ENtitty
    // Number  > 1,1.9,0.7,0 ,4567892345678923456789345678
    // String > "text|number|any sort" >>"2.5" "Hello World" "a"
        // + no addition || yes concate

    // 10+"10"+100+400>> 1010+500
    // >"1010100400"
    
    // 10+10+"200"+"700" >> 10+10 >20+"200">20200+"700" >20200700
    // >20200700

    //  Boolean > true or false > "true">> String

    // check > Which datatype is belongs >> What Method > typeof()
//    typeof(value)

// Composite >> Collections
// Array
// >>[] ||collections of heterogenous datatypes 
// ex : [2,4,"Hi",true,"Welcome",45,false]
//       0 1   2    3     4       5   6
// element >> 2 is a element 4 >>7 elements 
// index >> 0 >> 1st element will ne placed at 0th index || start pt > 0 || end pint >>arr.length-1
// length >> Total number of elements  >> 7

// store in variable using a keyword
 let arr=[2,4,"Hi",true,"Welcome",45,false]
//  arr[indexNo] > to access any element
//  arr[3]
//  arr.length >> find how many elements ?
console.log(arr)
console.log(arr[3])
console.log(arr.length)

// insrt
arr[7]="Anny"
console.log(arr)
// last index > 7 || 8 > Pwershell > 

//arr.length-1 || last index >> 
arr[arr.length]="Powershell" // 
arr[arr.length+1]="Javascript"
console.log(arr)

// update
arr[0]="property"
console.log(arr)
// Property (proprtyName)|| method (MethodName())
// length    || typeof() 
var arr1=["Poonam","FSD Developer","India","9"]

// Object
//{}>> key:value pair
// {
    //key1:value1,
    //key2:value2,
    //key3:value3
    // ... n
//  }

var stuObj={
    name:"Poonam",
    designatn:"Developer",
    country:"India",
    dob:"9",
    marks:[89,67,45,56]
}
console.log(stuObj)
// dot opeartor

console.log(stuObj.country)
console.log(stuObj.designatn)

//insert 
stuObj.currentYear=2024
console.log(stuObj)

//update
stuObj.dob=25

//delete
delete stuObj.designatn
console.log(stuObj)

//length
// keys >> in an array
// values >> in an array
console.log(Object.keys(stuObj))//[ 'name', 'country', 'dob', 'currentYear' ] >> O/P>> array
console.log(Object.values(stuObj))//[ 'Poonam', 'India', 25, 2024 ] >> O/P >> array
console.log(Object.keys(stuObj).length)
console.log(Object.values(stuObj).length)

//hasOwnProperty() >> any keys is present or not>> true || false
console.log(stuObj.hasOwnProperty("country"))
console.log(stuObj.hasOwnProperty("fname"))

// O/p>>67


// typeOf
console.log(typeof(arr)) // object
console.log(typeof(stuObj)) // object

// Trivial >> check 
// null  empty
// undefined >> declare a variable but value is not assigned 
let str=""
if(str==""||null||undefined){
    console.log("true")
}else{
    console.log("false")
}