// Normal Call Function
function test(){
    function test1(){
        console.log("Hello World")
    }
    console.log(1)
    // test1()
}
test()// function invokation|| function call
//________________________________________________
// callback are not function inside function
// callback are those where the inner function is dependant on the outer function
// few inbuilt examples

// setTimeOut function is written for us...just we are using it 
//setTimeout()
setTimeout(
            ()=>{console.log(2)}
            
         )// function invokation|| function call ||The "callback" argument must be of type function

//  ++++++
setTimeout(timer1,1000)// timer1 is function 
setTimeout(()=>{},1000)

function timer1(){
    console.log("timer1 is executed")
}

console.log(timer1)    // means the entire function you are trying to access
timer1()  // means you are trying to access the output of the function

//________________________________________________
let arr=[1,7,8,9]
const newarr=arr.map((element,index)=>element*2)
console.log(newarr)
//________________________________________________
//we can create a callback ???
// Any one
function callbackFunc(){
    console.log("I am callback Function")
}

function outerFunction(cbk){// params
    console.log("i am an outerfunction")
    cbk()  
}

outerFunction(callbackFunc)  // i want to like setTimeout // args

// in other way?
outerFunction(()=>{
    console.log("I am an callback Function")
})
//________________________________________________
// setTimout  >> we chnaged just to test the callback
function setTimeout(cbk){
    console.log("Some ops done by experts to get the delay --main function")
    cbk()
}

function callbacksetTimeOut(){
    console.log("Some ops done by experts to get the delay --cbk function")
}
//1st call
setTimeout(callbacksetTimeOut)

//2nd call >> another way
setTimeout(()=>{
    console.log("Some ops done by experts to get the delay --cbk function")
})


// __________________

// Write an callback
// calculate of a square of any number
// function > displayResult   >>16 
// function > calculateSquare >> 4 
// cbk >> we pass the wholefunction as a args to the another function
//        we have to receive as a params in the another function with watever name(userdefined name)

function calculateSquare(num,cbk){ //num>>4  cbk >>displayResult // we receive in the params
    console.log("Finding Square...",num)
    let square=num*num // 4*4 
    cbk(square)
}

//cbk function
function displayResult(result){ // display the result of square >> result || response |
    console.log("Square of a num is ....",result)
}

// 1st way
calculateSquare(4,displayResult)// args

// ____________________________________________________________
// In 1more way

function calculateSquare2(num,cbk){ //num>>4  cbk > // we receive in the params
    console.log("Finding Square2...",num)
    let square=num*num // 4*4 
    cbk(square)
}
calculateSquare2(5,(res)=>{
    console.log("Square2 of a num is ....",res)
})// args


// Try addition of 2 numbers





