import express from "express";
import router from "./routes.mjs";

const PORT = 8084;
const app = express();

app.use(express.json());

app.use("/scores", router);

app.listen(PORT, function () {
  console.log("Hello!");
});
