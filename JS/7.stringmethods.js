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

//concat()
let str7="Hello"
let str8="World"
console.log(str7+" "+str8)
console.log(str7,str8)
console.log(`${str7} ${str8}`)
console.log("Concat")
console.log(str7.concat(" ",str8," The given word is present","abcde"))

//endswith()  >> boolean values
let str9="W3Schools maintains a complete JavaScript reference"
console.log(str9.endsWith("reference"))

//startsWith()
console.log(str9.startsWith("W3Schools"))

//replace()
let str10="JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions."
console.log("Replace")
console.log(str10.replace("JavaScript","Welcome"))

//replaceAll()

console.log(str10.replaceAll("JavaScript","Welcome"))
console.log("global")
console.log(str10.replace(/JavaScript/g,"Welcome"))
console.log("gi")
console.log(str10.replace(/javascript/gi,"Welcome"))  // this one 

//at()
//charAt()
let str11="JavaScript (JS) is a lightweight interpreted"
console.log("at")
console.log(str11.at(11))// index numbers 
console.log(str11.at(-2))
console.log("Charat")
console.log(str11.charAt(11))// doesnt negative number >> ""
console.log(str11.charAt(-1))
console.log(str11.charAt(-2))

//substring()
//slice()
console.log(str11.substring(0,3))// doesnt take negative
console.log(str11.slice(0,3))

// indexOf() // index no of string where it is lying >> indexnum || -1
console.log(str11.indexOf("Is"))

// repeat()
let str="Terminal"
console.log(`We execute code in our Vs code ${str.repeat(3)}`)
console.log(str.repeat(5))
console.log(str.repeat(2.5))


//