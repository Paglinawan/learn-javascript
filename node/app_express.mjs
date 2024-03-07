import express from "express";

const PORT = 8088;
const app = express();

app.get("/", function (req, res) {
  res.send(`
    <p>Hello Miho. How are you?</p>
  `);
});
app.listen(PORT, () => {
  console.log("Hello!");
});
