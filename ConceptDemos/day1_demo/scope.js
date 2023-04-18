function someFunction(){
    var x = "Declared inside the function";
    console.log("inside the function");
    console.log(x);
}
someFunction();
// console.log(x);

//global scope
var x1 = "Declared outside the function";
someFunction1();
function someFunction1(){
    console.log("inside the function");
    console.log(x1);  
}
console.log("Outside the function");
console.log(x1);

//reassign 
var v1 = 1;
v1=20;
console.log(v1);//20

let b1 = 10;
b1=100;
console.log(b1);//100

//redeclaration 
var v1 = 1;
var v1=20;
console.log(v1);//20

let b11 = 10;
//let b11 = 100;
console.log(b1);//error