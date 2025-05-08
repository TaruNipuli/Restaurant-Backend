import { getMenus, getMenuById, insertMenu, deleteMenuModel, updateMenuModel } from '../models/menu-model.js';

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

// Delete menu
export const deleteMenu = async (req, res) => {
    const { id } = req.params;

    try {
        const success = await deleteMenuModel(id);
        if (!success) {
            return res.status(404).json({ message: 'Menu not found' });
        }
        res.status(200).json({ message: 'Menu deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete menu' });
    }
};

// Update menu
export const updateMenu = async (req, res) => {
    const { id } = req.params;
    const { name, description, restaurant_id } = req.body;
    const image = req.file?.filename || null;
  
    try {
      const updatedMenu = await updateMenuModel(id, { name, description, restaurant_id, image });
  
      if (!updatedMenu) {
        return res.status(404).json({ message: 'Menu not found' });
      }
  
      res.status(200).json({ message: 'Menu updated successfully', menu: updatedMenu });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update menu' });
    }
  };
  