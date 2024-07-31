//asignment =
a=5;

// comparision operators   == === !=
// ==  checks value not the datatype
// ===  checks value + datatype   >> strict comparision
// > < >= <=
console.log("2"==2)
console.log("2"===2)

// logical operators
// AND     &&
// OR      ||
// NOR/NOT !
let x=6;
let y=3;
if(x<10 && y>1 ){
    console.log("AND TRUE")
}else{
    console.log("AND FALSE")
}

// OR
if(x<10 || y>1 ){
    console.log("OR TRUE")
}else{
    console.log("OR FALSE")
}
// NOT 
console.log(!(x===y))//true
console.log(!(x>y))//false

// conditional operators
// if
// if else
// if elseif elseif ...else
// ternary operator
//let x=6;
// let y=3;
if(x==6){
    console.log("x value is true")
}
// true > x value is true   
// false > ?   >> no output

// if else
if(x==7){
    console.log("if else value is true")
}else{
    console.log("if else value is false")
}

//x=6;
if(x==0){
    console.log("else if value is 0")
}
else if(x==7){
    console.log("else if value is 7")
}
else if(x<0){
    console.log("else if value is negative number")
}
else if(x>0){
    console.log("else if value is positive number")
}
else{
    console.log("else if value is not a number")
}

//ternary operator
// if else > understanding is same
//Syntax
// (condition)?"trueval":"falseval"
(x==6)?console.log("Ternary Operator value is true"):console.log("Ternary Operator value is false")

let terOpEx=(x==6)?"2 Ternary Operator value is true":"2 Ternary Operator value is false"
console.log(terOpEx)

// Task on ternary operator
// Voting >> any person age >> equals and above 18 
// Eligible to Vote    >>true val
// Not ELigible to Vote   >> false val