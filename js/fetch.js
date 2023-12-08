fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (json) {
    console.log(json);
    for (const user of json) {
      console.log(`I'm ${user.name}`);
    }
  });
