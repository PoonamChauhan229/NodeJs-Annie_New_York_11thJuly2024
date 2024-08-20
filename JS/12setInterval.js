// setInterval(()=>{},interval(time in milliseconds))

//setTimeOut >>> will only once after the timer is completed
//setInterval 
// movie >> theratre  movie interval movie inmterval movie
// >> it will exceute again and agian after the specifc interval
let count=0
// setInterval(()=>{console.log(count++)},500)// sec > 1 sec

// without using a for loop
// 1 2 3 4 5 6.............

// clearInterval()

// without using a for loop
// 1 2 3 4 5 6.............10

let intervalId=setInterval(()=>{    
    count++;// 1 2 3
    console.log(count);// 1 2 3
    if(count==10){        
        clearInterval(intervalId)
        console.log("Counter should stop")
    }

},1000)

// function with return keyword 95% >> return somevaribale >> returned varaible