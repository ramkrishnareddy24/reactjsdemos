const users = [{id:1, name:'Ben'},
               {id:2, name:'Holy'}]

const newUser = {id:3, name:'Pepa'}
users.push(newUser);

const updateUsers = [...users, newUser]
// console.log(users);
// console.log(updateUsers);

let obj1 = {foo:'bar', x:42};
let obj2 = {foo:'baz', y:22};
let mergeObj = {...obj1, ...obj2};
// console.log(obj1);
// console.log(obj2);
console.log(mergeObj);
