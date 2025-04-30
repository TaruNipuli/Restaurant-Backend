import { getMenus, getMenuById, insertMenu } from '../models/menu-model.js';

// Get all menus
export const fetchMenus = async (req, res) => {
    try {
        const fullMenus = await getMenus();
        res.status(200).json(fullMenus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching menus' });
    }
};

// Get a single menu by ID
export const fetchMenuById = async (req, res) => {
    const { id } = req.params;
    try {
        const menu = await getMenuById(id);
        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }
        res.status(200).json(menu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching menu' });
    }
};

// Create a new menu with image
export const createMenu = async (req, res) => {
    const { restaurant_id, name, description } = req.body;
    const image = req.file?.filename || null; // Get uploaded image filename

    try {
        const newMenu = await insertMenu({ restaurant_id, name, description, image });
        res.status(201).json({ message: 'Menu created successfully', menu: newMenu });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create menu' });
    }
};
