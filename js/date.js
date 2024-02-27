const myBirthDay = new Date(1994, 4, 20);
const endOfLastMonth = new Date(2000, 3, 0);

console.log(myBirthDay.toLocaleDateString());
console.log(endOfLastMonth.toLocaleDateString());

// myBirthDay.setDate(24);
myBirthDay.setDate(myBirthDay.getDate() + 35);
console.log(myBirthDay.toLocaleDateString());
