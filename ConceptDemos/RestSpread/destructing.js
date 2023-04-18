const p  ={
    name: 'Ram',
    age: 23,
    skill: 'Java'
}

// ES6
let{name,age,skill} = p;
let{name:n,age:a,skill:s} = p; //assign different variable names.
console.log(name);
console.log(a);