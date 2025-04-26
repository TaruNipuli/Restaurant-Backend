import express from 'express';
import { fetchMenus } from '../controllers/menu-controller.js';

const router = express.Router();

// Route to get all menus
router.get('/', fetchMenus);

export default router;