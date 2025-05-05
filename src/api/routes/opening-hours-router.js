
import express from 'express';
import { fetchOpeningHours } from '../controllers/opening-hours-controller.js'; 

const router = express.Router();


router.get('/:id', fetchOpeningHours); 

export default router;
