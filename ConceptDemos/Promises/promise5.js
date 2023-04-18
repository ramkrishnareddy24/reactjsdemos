function getData() {
    // var promise = new Promise(function(resolve,reject));
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { name: 'abhay', email: 'abh@gmail.com' },
          { name: 'neha', email: 'neha@gmail.com' },
          { name: 'maya', email: 'may@gmail.com' },
          { name: 'rupa', email: 'rupa@gmail.com' },
        ]);
      }, 1000);
    });
  }

  function onFullfilled(users){
    console.log(users);
  }

  const promise = getData();
  promise.then(onFullfilled);