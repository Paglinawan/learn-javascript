import express from "express";

const PORT = 8088;
const app = express();

app.use(express.urlencoded());

app.get("/", function (req, res) {
  res.send(`
    <p>Hello Miho. How are you?</p>
    <p>You wanna see response?? Then <a href="result/?param1=1&param2=2">Click Here!</a></p>
    <form action="/form_result" method="POST">
      <input type="text" name="sample"></input>
      <button type="submit">SUBMIT</button>
    </form>
  `);
});

app.get("/result", function (req, res) {
  const params = req.query;
  console.log(params);
});

app.post("/form_result", function (req, res) {
  const params = req.body;
  console.log(params);
});

app.listen(PORT, () => {
  console.log("Hello!");
});
