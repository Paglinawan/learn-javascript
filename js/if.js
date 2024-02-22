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
