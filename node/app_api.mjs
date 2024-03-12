import express from "express";

const PORT = 8084;
const app = express();

app.use(express.json());

const scores = [
  { name: "Miho", score: 70 },
  { name: "Judith", score: 95 },
  { name: "Embar", score: 45 },
  { name: "Ysha", score: 62 },
];

app.get("/scores", function (req, res) {
  res.json(scores);
});

app.post("/scores", function (req, res) {
  const result = req.body;
  scores.push(result);
  console.log(scores);
  res.json(result);
});

app.delete("/scores/:id", function (req, res) {
  const deleteId = req.params.id;
  scores.splice(deleteId, 1);
  console.log(scores);
  res.json({ deleteId });
});

app.patch("/scores/:id", function (req, res) {
  const targetScore = scores[req.params.id];
  if (req.body.hasOwnProperty("name")) {
    targetScore.name = req.body.name;
  }
  if (req.body.hasOwnProperty("score")) {
    targetScore.score = req.body.score;
  }
  console.log(scores);
  res.json(targetScore);
});

app.listen(PORT, function () {
  console.log("Hello!");
});
