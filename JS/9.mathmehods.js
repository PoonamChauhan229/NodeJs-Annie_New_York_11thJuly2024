// Math >> Mathematical >>

// circumfernec of circle 2*PI*R
console.log(Math.PI)
console.log(2*Math.PI*3)
//
// toFixed()  >> limit the decimal values
console.log(18.84955592153876.toFixed(1))

Math.pow()

// 2 to the power of 4
console.log(2*2*2*2)

console.log(Math.pow(2,4))

// Math.sqrt()
// 4  >> 2*2   >2
// 16 >> 4 *4  >4
//25  >> 5*5  >5

console.log(Math.sqrt(4))
console.log(Math.sqrt(9))
console.log(Math.sqrt(16))
console.log(Math.sqrt(25))
console.log(Math.sqrt(2))
console.log(Math.sqrt(5))

// Math.cbrt()
// 8 >>2 >> 2*2*2
// 27 >>3 >> 3*3*3
console.log(Math.cbrt(8))
console.log(Math.cbrt(18))
console.log(Math.cbrt(4))
console.log(Math.cbrt(9))
console.log(Math.cbrt(16))
console.log(Math.cbrt(25))
console.log(Math.cbrt(2))
console.log(Math.cbrt(5))

console.log("Random Method")
// toFixed()
// Math.random()
console.log(Math.random()) // 0-1 0 is included and 1 excluded' by default

// toFixed()
// get a value between 0-10 0 is included 10 excluded
console.log(Math.random()*10) 

//toFixed()
// get a value between 2 nos
// Math.random()*(max-min)+min
// 10-20
console.log(Math.random()*(20-10)+10)
// toFixed()

//Math.ceil()
console.log("Math.ceil()")

console.log(Math.ceil(0.95))
console.log(Math.ceil(1.95))
console.log(Math.ceil(1.2))
console.log(Math.ceil(1.3)) 
console.log(Math.ceil(1.6)) 

//Math.floor()
console.log("Math.floor()")
console.log(Math.floor(0.95))
console.log(Math.floor(1.95))
console.log(Math.floor(1.2))
console.log(Math.floor(1.3)) 
console.log(Math.floor(1.6))
console.log(Math.floor(1.95))
console.log(Math.floor(2.95))
console.log(Math.floor(3.2))
console.log(Math.floor(5.3)) 
console.log(Math.floor(7.6))

//Math.round()
//Mathematical
console.log("Math.round()")

console.log(Math.round(0.95))//1
console.log(Math.round(1.95))//2
console.log(Math.round(1.2))//1
console.log(Math.round(1.3)) //1
console.log(Math.round(1.6))//2
console.log(Math.round(1.95))//2
console.log(Math.round(2.95))//3
console.log(Math.round(3.2))//3
console.log(Math.round(5.3)) //5
console.log(Math.round(7.6))//8



// You are given the coefficients of a quadratic equation in order A, B & C.

// Where A is the coefficient of X2,  B is the coefficient of X and C is the constant term in the most simplified form.

// Example: For  X2 + 5X + 6 = 0, you are given the input as: 1 5 6.

// Write a program to find all of the roots of the quadratic.

// Note: The output should be up to 2nd decimal place (round off if needed) and in case of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.
// Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a
// Output Description:
// Print the two values of X after rounding off to 2 decimal places if required.

// Sample Input :
// 1 5 6
let a=1
let b=5
let c=6


// {-b + √(b² - 4ac) } / 2a 

// {-b - √(b² -4ac)} / 2a

// b² - 4ac =
let x=(Math.pow(b,2))-(4*a*c)
console.log(1)
// Math.sqrt(34)


// Sample Output :
// -2.00
// -3.00
