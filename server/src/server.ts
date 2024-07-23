import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/dbConfig';
import shortUrl from './routes/shortUrl'
dotenv.config();
connectDb();

const port = process.env.PORT || 5001;

const app = express();

//using middleware, based on the body-parser middleware
app.use(express.json());
//parsing incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http:localhost:3000",
    credentials: true,
}))

app.use("/api", shortUrl);

//starting the server
app.listen(port, () => {
    console.log(`Server started successfully on port: ${port}`);
}); 
