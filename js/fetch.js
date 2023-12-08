async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  for (const user of json) {
    console.log(`I'm ${user.name}`);
  }
}
fetchUsers();
