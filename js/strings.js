const colors = ["red", "pink", "green", "yellow", "blue"];

colors.forEach((color) => {
  // reを含む
  if (color.includes("re") === true) {
    console.log("ree -> " + color);
  }
  // 1番目にellが出現
  if (color.indexOf("ell") === 1) {
    console.log("ell -> " + color);
  }
  // blから始まる
  if (color.startsWith("bl") === true) {
    console.log("ell -> " + color);
  }
});

const emails = [
  "howareyou@example.com",
  "iamfine@example.co.jp",
  "haveaniceday@example.net",
];
emails.forEach((email) => {
  // const loc = email.indexOf("@");
  // console.log(email.slice(0, loc));
  const items = email.split("@");
  console.log(items[0]);
});

const reviews = [3, 5, 4, 2, 4];
reviews.forEach((review) => {
  for (let i = 0; i < review; i++) {
    const result = "*".repeat(review);
    console.log(result);
  }
});
