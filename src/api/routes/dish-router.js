import express from 'express';
import { createDish, fetchDishes, removeDish, modifyDish, getDishById } from '../controllers/dish-controller.js';

const router = express.Router();

router.post('/', createDish);

router.get('/', fetchDishes);

router.delete('/:id', removeDish);

router.put('/:id', modifyDish);

router.get('/:id', getDishById);

export default router;
