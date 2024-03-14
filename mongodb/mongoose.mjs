import { connect, Schema, model } from "mongoose";
import env from "dotenv";
env.config();

connect(process.env.MONGO_URL);
const catSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, enum: [0, 1] },
  bool: { type: Boolean, default: false, alias: "b" },
  dt: {
    type: Date,
    set: function (newVal) {
      return new Date(newVal);
    },
    get: function (val) {
      return val instanceof Date ? val : new Date(val);
    },
  },
  arr: [String],
});
const Cat = model("Cat", catSchema);

const kitty = new Cat();
kitty.name = "Kitty";
kitty.size = 0;
kitty.dt = "2000/3/14";

kitty.save().then((doc) => console.log(doc.dt, doc.b));
