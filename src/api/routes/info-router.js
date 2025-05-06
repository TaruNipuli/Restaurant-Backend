import express from 'express';
import { fetchInfo } from '../controllers/info-controller.js';

const router = express.Router();


router.get('/', fetchInfo);

export default router;