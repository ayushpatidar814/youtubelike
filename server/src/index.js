import dotenv from 'dotenv';
import connectDb from './db/mongoDb.js';
import app from './app.js';

dotenv.config({
    path: './env'
});

await connectDb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at http://localhost:${process.env.PORT || 8000}`);
    })
})
.catch((err) => {
    console.log("Failed to connect mongodb: ", err);
})
