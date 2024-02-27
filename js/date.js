// const myBirthDay = new Date(1994, 4, 20);
// const endOfLastMonth = new Date(2000, 3, 0);

// console.log(myBirthDay.toLocaleDateString());
// console.log(endOfLastMonth.toLocaleDateString());

// myBirthDay.setDate(24);
// myBirthDay.setDate(myBirthDay.getDate() + 35);
// console.log(myBirthDay.toLocaleDateString());

// const original = new Date(1994, 4, 20);
// const duplicate = new Date(original.getTime());
// original.setDate(25);

// console.log(original.toLocaleDateString());
// console.log(duplicate.toLocaleDateString());

const diff = Date.now() - new Date(2024, 1, 0).getTime();
const days = Math.floor(diff / 1000 / 60 / 60 / 24);
console.log(days + "日前");
