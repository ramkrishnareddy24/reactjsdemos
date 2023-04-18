// for(let i=0;i<5;i++){
//     console.log("inside loop",i);
// }
// console.log("inside loop",i);

// for(var i=0;i<5;i++){
//     console.log("inside loop",i);
// }
// console.log("inside loop",i);

// var c=10;
// var c;
// console.log(c);

// let a=10;

// const salary = [450,340,333,500,670];

// let inc;

// salary.forEach(num=>console.log(num));

// salary.forEach((num)=>{
//     inc=inc+num;
// });
// document.write("bonus = "+inc);


// map()
// const numArray = [1,2,3,4,5];
// const double = numArray.map(num=>{
//     return num*5;
// });
// console.log(double);

// find()
// const users=[{name:"pooja", age:20},
//              {name:"raj", age:23},
//              {name:"suraj", age:24},
//              {name:"pooja", age:23},]
// users.find(user=>users.name==="pooja");


//filter
let object = [{flag:1 , a:1},
    {flag:0 , a:2},
    {flag:1 ,a:3}];
object.filter((obj)=>{
if(obj.flag===1){
console.log("flag :"+obj.flag +",a:"+obj.a);
}
})

//every
const computers = [
    { name: "Apple", ram: 24 },
    { name: "Compaq", ram: 4 },
    { name: "Acer", ram: 32 }
  ]
  computers.every(comp=>comp.ram>2);

// reduce
const numbers = [10, 20, 30]
numbers.reduce((acc, number) => acc + number, 0)