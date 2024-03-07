import express from "express";

const PORT = 8088;
const app = express();

app.get("/", function (req, res) {
  res.send(`
    <p>Hello Miho. How are you?</p>
    <p>You wanna see response?? Then <a href="result/?param1=1&param2=2">Click Here!</a></p>
  `);
});

app.get("/result", function (req, res) {
  const params = req.query;
  console.log(params);
});

app.listen(PORT, () => {
  console.log("Hello!");
});
