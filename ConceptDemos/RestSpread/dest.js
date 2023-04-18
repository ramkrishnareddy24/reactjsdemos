const manager = {
    id: 101,
    name: 'Sam',
    reportees: [{id:10, name:"Harry"}, {id:11, name:"Ron"}, {id:12, name:"Bob"}]
}

const {name: managerName,
        reportees:[{name:repName1}, 
                   {name:repName2}]} = manager;

console.log(managerName);
console.log(repName1);
console.log(repName2);