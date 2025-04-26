import { getMenus } from '../models/menu-model.js';

// get menus
export const fetchMenus = async (req, res) => {
    try {
        const fullMenus = await getMenus();
        res.status(200).json(fullMenus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching menus' });
    }
};