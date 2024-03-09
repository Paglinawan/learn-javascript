import express from "express";

const PORT = 8082;
const app = express();

app.get("/", function (req, res) {
  res.send({
    message: "How are you?",
    number: 1,
    array: ["pink", "yellow", "tomato"],
  });
  // send: 適宜調整
  // json: jsonデータに限定
  // end: 文字列のみ
});

app.listen(PORT, () => {
  console.log("Hello!");
});
