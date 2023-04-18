function sum(a,b){
    return a+b;
}
// console.log(sum(1,2,3,4,5));


// it will gather all arguments, but if it's at the end of a list, it will gather every argument that is remaining.
function addNums(...nums){
    return nums.reduce((previous,current)=>{
        return previous+current;
    });
}
// console.log(addNums(1,2,3));
// console.log(addNums(1,2,3,4,5));


function restTest(one,two,...args){
    console.log(one);
    console.log(two);
    console.log(args);
}
// restTest(1,2,3,4,5,6,7);

function greet(greeting,...names){
    return `${greeting} ${names.join(",")}!`;
}
console.log(greet("hello","Steve","Bills"));
console.log(greet("hello"));
