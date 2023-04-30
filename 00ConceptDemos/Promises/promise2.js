//Because getData() return empty array the users array is empty (line A) so find() on the users array could not find the name /data and return undefind 
//The challenge is how to access the users returned from the getUsers() function after one second. One classical approach is to use the callback.
function getData() {
  let users = [];
  setTimeout(() => {
    users = [
      { name: 'abhay', email: 'abh@gmail.com' },
      { name: 'neha', email: 'neha@gmail.com' },
      { name: 'maya', email: 'may@gmail.com' },
      { name: 'rupa', email: 'rupa@gmail.com' },
    ];
  }, 1000);
  return users;
}

function findData(name) {
  const users = getData();
  const user = users.find((user) => user.name === name);
  return user;
}
console.log(findData('neha'));
