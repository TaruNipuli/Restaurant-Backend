import { getMenus, getMenuById } from '../models/menu-model.js';

// get all menus
export const fetchMenus = async (req, res) => {
    try {
        const fullMenus = await getMenus();
        res.status(200).json(fullMenus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching menus' });
    }
};

// get a single menu by ID
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
