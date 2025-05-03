import { getAllAllergens, insertAllergen, addAllergenToDish, removeAllergenFromDish, deleteAllergen } from '../models/allergen-model.js';

// Fetch all allergens
export const fetchAllAllergens = async (req, res) => {
    try {
        const allergens = await getAllAllergens();
        res.status(200).json(allergens);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching allergens' });
    }
};

// Create a new allergen
export const createAllergen = async (req, res) => {
    const { name } = req.body;
    try {
        const newAllergen = await insertAllergen(name);
        res.status(201).json({ message: 'Allergen created successfully', allergen: newAllergen });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create allergen' });
    }
};

// Link allergen to dish
export const linkAllergenToDish = async (req, res) => {
    const { dish_id, allergen_id } = req.body;
    try {
        await addAllergenToDish(dish_id, allergen_id);
        res.status(201).json({ message: 'Allergen linked to dish successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to link allergen to dish' });
    }
};

// Unlink allergen from dish
export const unlinkAllergenFromDish = async (req, res) => {
    const { dish_id, allergen_id } = req.body;
    try {
        await removeAllergenFromDish(dish_id, allergen_id);
        res.status(200).json({ message: 'Allergen removed from dish successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to remove allergen from dish' });
    }
};

// Delete an allergen
export const deleteAllergenById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await deleteAllergen(id);
        if (deleted === 0) {
            return res.status(404).json({ message: 'Allergen not found' });
        }
        res.status(200).json({ message: 'Allergen deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete allergen' });
    }
};
