// string > " "|| ' ' 

//split() // it returns an array 
let str1="   ARITHMETIC @ operators per@form arithmetic@ on numbers (lite@rals or variables).   "
console.log(str1.split("@"))

// "javascript"  >[j,a,v,a,s,c,r,i,p,t] >>>.split("")
// 'apple'        >a-p-p-l-e    >> split + arrayMethod

console.log("a-p-p-l-e")

// .toLowerCase()
// .toUpperCase()

console.log(str1.toLowerCase())
console.log(str1.toUpperCase())

// trim()
// trimEnd()
// trimStart()
console.log(str1.trim())
console.log(str1.trimStart())
console.log(str1.trimEnd())

// toString()
let num=45;
let str5=num.toString()
console.log(str5)
console.log(typeof(str5))

//substring(indexStart,indexEnd) 
//JavaScript References. W3Schools maintains a complete JavaScript reference
let str6="JavaScript References. W3Schools maintains a complete JavaScript reference"
console.log("Subsstring")
console.log(str6.substring(2))
console.log(str6.substring(1,8))
console.log(str6.substring(0,25))

"Mozilla"
//M
//Mozil
//lla

//match  > [] >> where this particluar elemnet is lying
console.log(str6.match("References"))

// includes() >> boolean value true/ false
console.log(str6.includes('References'))
console.log(str6.includes('References1'))

// ternary operator
let val=str6.includes('References')?"The given word is present":"The given word is not present"
console.log(val)

//`` template literals  >> backticks

let word="References1"
let val1=str6.includes(word)?`The given word is present - ${word}`:`The given word is not present-${word}`
console.log(val1)
