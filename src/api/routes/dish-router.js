import express from 'express';
import { createDish, fetchDishes, removeDish, modifyDish } from '../controllers/dish-controller.js';

const router = express.Router();

router.post('/', createDish);

router.get('/', fetchDishes);

router.delete('/:id', removeDish);

router.put('/:id', modifyDish);

export default router;
