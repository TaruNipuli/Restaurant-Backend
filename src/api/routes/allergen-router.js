import express from 'express';
import { fetchAllAllergens, createAllergen, linkAllergenToDish, unlinkAllergenFromDish, deleteAllergenById, getAllergenById } from '../controllers/allergen-controller.js';

const router = express.Router();

// Fetch all allergens
router.get('/', fetchAllAllergens);

// Create a new allergen
router.post('/', createAllergen);

// Link allergen to dish
router.post('/link', linkAllergenToDish);

// Unlink allergen from dish
router.post('/unlink', unlinkAllergenFromDish);

// Delete an allergen by ID
router.delete('/:id', deleteAllergenById);

router.get('/:id', getAllergenById);

export default router;
