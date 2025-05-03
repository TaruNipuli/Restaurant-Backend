import promisePool from '../../utils/database.js';

// Get all allergens
export const getAllAllergens = async () => {
    const [rows] = await promisePool.execute('SELECT * FROM Allergen');
    return rows;
};

// Insert a new allergen
export const insertAllergen = async (name) => {
    const [result] = await promisePool.execute('INSERT INTO Allergen (name) VALUES (?)', [name]);
    return { id: result.insertId, name };
};

// Link an allergen to a dish
export const addAllergenToDish = async (dish_id, allergen_id) => {
    await promisePool.execute('INSERT INTO Dish_Allergen (dish_id, allergen_id) VALUES (?, ?)', [dish_id, allergen_id]);
};

// Remove allergen from dish
export const removeAllergenFromDish = async (dish_id, allergen_id) => {
    await promisePool.execute('DELETE FROM Dish_Allergen WHERE dish_id = ? AND allergen_id = ?', [dish_id, allergen_id]);
};

// Delete an allergen
export const deleteAllergen = async (id) => {
    const [result] = await promisePool.execute('DELETE FROM Allergens WHERE id = ?', [id]);
    return result.affectedRows;
};


export const getAllergenByIdFromDb = async (id) => {
    const [rows] = await promisePool.execute('SELECT * FROM Allergen WHERE id = ?', [id]);
    return rows[0]; // Palautetaan ensimmäinen rivi, jos löytyy
};