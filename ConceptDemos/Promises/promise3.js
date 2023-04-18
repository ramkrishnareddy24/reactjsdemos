function getData(callback) {
  // let users = [];
  setTimeout(() => {
    callback = [
      { name: 'abhay', email: 'abh@gmail.com' },
      { name: 'neha', email: 'neha@gmail.com' },
      { name: 'maya', email: 'may@gmail.com' },
      { name: 'rupa', email: 'rupa@gmail.com' },
    ];
  }, 1000);
}

function findData(name, callback) {
  getData((users) => {
    const user = users.find((user) => user.name === name);
  });
  callback(user);
}
findData('neha', console.log);
