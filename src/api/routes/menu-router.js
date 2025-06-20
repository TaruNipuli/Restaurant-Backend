import express from 'express';
import upload from '../../utils/upload-config.js';


import { fetchMenus, fetchMenuById, createMenu, deleteMenu, updateMenu } from '../controllers/menu-controller.js';

const router = express.Router();

// GET all menus
router.get('/', fetchMenus);

// GET a single menu by ID
router.get('/:id', fetchMenuById);

// POST a new menu with image upload
router.post('/', upload.single('image'), createMenu);

// DELETE a menu by ID
router.delete('/:id', deleteMenu);

// PUT, update menu
router.put('/:id', upload.single('image'), updateMenu);


export default router;
