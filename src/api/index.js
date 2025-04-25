import express from 'express';
import userRouter from './routes/user-router.js';
import menuRouter from './routes/menu-router.js';

const router = express.Router();

// bind base url from user to userRouter
router.use('/users', userRouter);

router.use('/menus', menuRouter); 

export default router;