import { insertDish, getAllDishes, deleteDish, updateDish } from '../models/dish-model.js';

// Create
export const createDish = async (req, res) => {
    try {
        const { menu_id, dish_name, type, description, price } = req.body;
        if (!menu_id || !dish_name || !type || !description || !price) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newDish = await insertDish({ menu_id, dish_name, type, description, price });
        res.status(201).json({ message: 'Dish created successfully', dish: newDish });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create dish' });
    }
};

// Read all (optional)
export const fetchDishes = async (req, res) => {
    try {
        const dishes = await getAllDishes();
        res.status(200).json(dishes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching dishes' });
    }
};

// Delete
export const removeDish = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await deleteDish(id);
        if (deleted === 0) {
            return res.status(404).json({ message: 'Dish not found' });
        }
        res.status(200).json({ message: 'Dish deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete dish' });
    }
};

// Update
export const modifyDish = async (req, res) => {
    const { id } = req.params;
    const { dish_name, type, description, price } = req.body;

    try {
        const updated = await updateDish(id, { dish_name, type, description, price });
        if (updated === 0) {
            return res.status(404).json({ message: 'Dish not found' });
        }
        res.status(200).json({ message: 'Dish updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update dish' });
    }
};
