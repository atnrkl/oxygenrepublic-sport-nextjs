import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db("registerform");
  return { db, client };
}

export { connect };
