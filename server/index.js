import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/dbConnect.js';

dotenv.config({});
const app = express();

connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})