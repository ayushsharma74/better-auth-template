import { MongoClient } from "mongodb";



// if (!process.env.MONGODB_URI) {
//     throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
// }

const client = new MongoClient("mongodb://localhost:27017/authtables");
const db = client.db();

export default db;


