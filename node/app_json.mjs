import express from "express";

const PORT = 8082;
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send(`
    <form action="/form_result" method="POST">
      <input type="text" name="sample"></input>
      <button type="submit">SUBMIT</button>
    </form>
    <script>
      const formEl = document.querySelector('form');
      formEl.onsubmit = function(e) {
        e.preventDefault();
        const sample = formEl[0].value;

        const data = {
          sample
        };

        fetch("/form_result", {
          method: "post",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
      }
    </script>
  `);
});

app.post("/form_result", function (req, res) {
  const params = req.body;
  console.log(params);
});

app.listen(PORT, () => {
  console.log("Hello!");
});
