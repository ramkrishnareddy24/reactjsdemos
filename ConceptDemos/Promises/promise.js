function getData(){
    return [
        {name: 'abhay', email:'abh@gmail.com'},
        {name: 'neha', email:'neha@gmail.com'},
        {name: 'maya', email:'may@gmail.com'},
        {name: 'rupa', email:'rupa@gmail.com'}
    ]
}

function findData(name){
    const users = getData();
    const user = users.findData((user) => user.name === name);
    return user;
}
console.log(findData('neha'));