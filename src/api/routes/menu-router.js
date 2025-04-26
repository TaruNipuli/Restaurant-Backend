import express from 'express';
import { fetchMenus, fetchMenuById } from '../controllers/menu-controller.js';

const router = express.Router();

// Route to get all menus
router.get('/', fetchMenus);

// Route to get a single menu by ID
router.get('/:id', fetchMenuById);

export default router;
