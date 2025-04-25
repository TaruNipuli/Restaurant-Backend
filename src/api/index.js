import express from 'express';
import userRouter from './routes/user-router.js';

const router = express.Router();

// bind base url from user to userRouter
router.use('/users', userRouter);

export default router;