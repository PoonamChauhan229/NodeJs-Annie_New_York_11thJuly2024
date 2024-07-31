// for loop
// loop > never ends >> infinite loops
// to stop u have condition

// for(let i=1;i<=5;i++){
//     console.log(i)//5 
// }
// What will be value of i when the loop stops ?
// 6

/*
i     i<=5   i++
1      T      2   >> 1
2      T      3   >> 2
3      T      4   >> 3
4      T      5   >> 4
5      T      6   >> 5
6      F      terminate loop   >> No print
      (6<=5)

*/


// Print the 2 times table
// 2
// 4
// 6
// 8
// 10
let num=4;
for(let i=1;i<=5;i++){
    console.log(num,"*",i,"=",i*num)//5 
}
// Assignment
   12345 
// *****  > row 1
// *****  > row 2
// *****
// *****
// *****

// for(let i=0;i<=6;i++){
//     console.log("******")
// }
// console.log("_______________________")
let str=""
for(let i=1;i<=5;i++){// 5 times rows
    for(let j=1;j<=5;j++){// 5 times cols 0 1 2 3 4
        str=str+"*"
    }
    str=str+"\n"
}
console.log(str)
// i> 1-5
// 01234
// *         row  > i=1  j=1;j<=i;j++ >>*
// **        row  >i=2   j=1;j<=2;j++ >>**
// ***       row  >i=3   j=1;j<=3;j++ >>***
// ****      row  >i=4   j=1;j<=4;j++ >>****
// *****     row  >i=5   j=1;j<=5;j++ >>*****
//           row  >i=6   terminate i<=5
let str1=""
for(let i=1;i<=5;i++){// rows 
    for(let j=1;j<=i;j++){
        str1=str1+"*"
    }
    str1=str1+"\n"

}
console.log(str1)
// *****       row  >i=5   j=1;j<=i;j++ >>*****
// ****        row  >i=4   j=1;j<=4;j++ >>****
// ***         row  >i=3   j=1;j<=3;j++ >>***
// **          row  >i=2   j=1;j<=2;j++ >>**
// *           row  >i=1   j=1;j<=5;j++ >>*
//             row  >i=0   terminate i<=5


// 1         row  >i=1  j=1;j<=i;j++ >>*
// 22        row  >i=2   j=1;j<=2;j++ >>**
// 333       row  >i=3   j=1;j<=3;j++ >>***
// 4444      row  >i=4   j=1;j<=4;j++ >>****
// 55555     row  >i=5   j=1;j<=5;j++ >>*****
//           row  >i=6   terminate i<=5

// 1         row  >i=1  j=1;j<=i;j++ >>*
// 12        row  >i=2   j=1;j<=2;j++ >>**
// 123       row  >i=3   j=1;j<=3;j++ >>***
// 1234      row  >i=4   j=1;j<=4;j++ >>****
// 12345     row  >i=5   j=1;j<=5;j++ >>*****
//           row  >i=6   terminate i<=5