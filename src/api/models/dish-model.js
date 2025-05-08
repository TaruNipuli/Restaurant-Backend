import promisePool from '../../utils/database.js';

// Insert a new dish
export const insertDish = async ({ menu_id, dish_name, type, description, price }) => {
    const [result] = await promisePool.execute(
        'INSERT INTO Dishes (menu_id, dish_name, type, description, price) VALUES (?, ?, ?, ?, ?)',
        [menu_id, dish_name, type, description, price]
    );

    return {
        id: result.insertId,
        menu_id,
        dish_name,
        type,
        description,
        price,
    };
};

// Get all dishes
export const getAllDishes = async () => {
    const [rows] = await promisePool.execute('SELECT * FROM Dishes');
    return rows;
};

// Delete dish
export const deleteDish = async (id) => {
    const [result] = await promisePool.execute('DELETE FROM Dishes WHERE id = ?', [id]);
    return result.affectedRows;
};

// Update dish
export const updateDish = async (id, updatedData) => {
    const { dish_name, type, description, price } = updatedData;
  
    const [result] = await promisePool.execute(
      'UPDATE Dishes SET dish_name = ?, type = ?, description = ?, price = ? WHERE id = ?',
      [dish_name, type, description, price, id]
    );
  
    if (result.affectedRows === 0) {
      return { message: 'Dish not found or not updated' };
    }
  
    // Fetch the updated dish
    const [dishRows] = await promisePool.execute(
      'SELECT * FROM Dishes WHERE id = ?',
      [id]
    );
  
    return {
      message: 'Dish updated successfully',
      dish: dishRows[0],
    };
  };
  

// Get one dish by id
export const getDishByIdFromDb = async (id) => {
    const [rows] = await promisePool.execute('SELECT * FROM Dishes WHERE id = ?', [id]);
    return rows[0];
};
