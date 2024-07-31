{
    // block of code
}
// _____________________________
// global variable >> scope is not there
let a=50;
var b=100;
const c=150;

{
    console.log(a,b,c)// 50 100 150
}
// _____________________________

{
    let z=20;
    console.log(z)//20
}
//console.log(z)//z is not defined 
// _____________________________

console.log("Challenge1")
// {
//     let e=90;// global variable
//     console.log(e)//90
//     {
//         let f=80;
//         console.log(e)//90
//         console.log(f)//80
//     }
//     let r=20;
//     console.log(e)//90
//     console.log(f)//error
//     console.log(r)//20
// }
// console.log(e)//error
// console.log(f)//error
// console.log(r)//error

// functional scope >> var keyword
{
    var w=45;
    console.log(w)
    {        
        var e=90;
        console.log(w)
        console.log(e)
        {
            var u=89;
            console.log(w)
            console.log(e)
            console.log(u)
        }
        console.log(w)
        console.log(e)
        console.log(u)
    }
    console.log(w)
    console.log(e)
    console.log(u)
}
console.log(w)
console.log(e)
console.log(u)