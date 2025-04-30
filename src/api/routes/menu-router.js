import express from 'express';
import upload from '../../utils/upload-config.js';


import { fetchMenus, fetchMenuById, createMenu } from '../controllers/menu-controller.js';

const router = express.Router();

// GET all menus
router.get('/', fetchMenus);

// GET a single menu by ID
router.get('/:id', fetchMenuById);

// POST a new menu with image upload
router.post('/', upload.single('image'), createMenu);

export default router;
