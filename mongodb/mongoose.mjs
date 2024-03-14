import mongoose from "mongoose";
import env from "dotenv";
env.config();

mongoose.connect(process.env.MONGO_URL);

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
