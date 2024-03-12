import express from "express";

const router = express.Router();

const scores = [
  { name: "Miho", score: 70 },
  { name: "Judith", score: 95 },
  { name: "Embar", score: 45 },
  { name: "Ysha", score: 62 },
];

router.get("/", function (req, res) {
  res.json(scores);
});

router.post("/", function (req, res) {
  const result = req.body;
  scores.push(result);
  console.log(scores);
  res.json(result);
});

router.delete("/:id", function (req, res) {
  const deleteId = req.params.id;
  scores.splice(deleteId, 1);
  console.log(scores);
  res.json({ deleteId });
});

router.patch("/:id", function (req, res) {
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

export default router;
