import express from 'express';
import { getMenus } from '../controllers/menu-controller.js';

const router = express.Router();

// Route to get all menus
router.get('/', getMenus);

export default router;
