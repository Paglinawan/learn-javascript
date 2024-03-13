import env from "dotenv";
env.config();

// const { MongoClient, ServerApiVersion } = require("mongodb");
import { MongoClient, ServerApiVersion } from "mongodb";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function getCollection() {
  try {
    await client.connect();
    const db = client.db("favorite");
    return db.collection("films");
  } catch {
    await client.close();
  }
}

getAllFilms();
async function getAllFilms() {
  const col = await getCollection();
  const cursor = col.find();
  const result = await cursor.toArray();
  console.log(result);

  await client.close();
}
