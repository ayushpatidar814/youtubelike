import dotenv from 'dotenv';
import express from 'express';
import connectDb from './db/mongoDb.js';

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

await connectDb();

app.get('/', (req, res) => {
    res.send("Server is running")
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
