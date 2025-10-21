import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/dbConnect.js';
import userRoute from './routes/user.route.js';
import courseRoute from './routes/course.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config({});
const app = express();

// Connecting database
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// Apis
app.use('/api/v1/user', userRoute);
app.use('/api/v1/course', courseRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})