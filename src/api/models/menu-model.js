import promisePool from "../../utils/database.js";

// Get all menus with their dishes and allergens
export const getMenus = async () => {
  const [menus] = await promisePool.execute('SELECT * FROM Menu');
  const fullMenus = [];

  for (let menu of menus) {
    // Fetch dishes related to the menu
    const [dishes] = await promisePool.execute('SELECT * FROM Dishes WHERE menu_id = ?', [menu.id]);
    const menuDishes = [];

    for (let dish of dishes) {
      // Fetch allergens related to the dish
      const [dishAllergens] = await promisePool.execute(`
        SELECT a.name FROM Dish_Allergen da
        JOIN Allergen a ON da.allergen_id = a.id
        WHERE da.dish_id = ?`, [dish.id]);

      menuDishes.push({
        ...dish,
        allergens: dishAllergens
      });
    }

    fullMenus.push({
      ...menu,
      dishes: menuDishes
    });
  }

  return fullMenus;
};

// Get a single menu by ID including dishes and allergens
export const getMenuById = async (id) => {
  const [menus] = await promisePool.execute('SELECT * FROM Menu WHERE id = ?', [id]);
  if (menus.length === 0) return null;

  const menu = menus[0];
  const [dishes] = await promisePool.execute('SELECT * FROM Dishes WHERE menu_id = ?', [menu.id]);
  const menuDishes = [];

  for (let dish of dishes) {
    const [dishAllergens] = await promisePool.execute(`
      SELECT a.name FROM Dish_Allergen da
      JOIN Allergen a ON da.allergen_id = a.id
      WHERE da.dish_id = ?`, [dish.id]);

    menuDishes.push({
      ...dish,
      allergens: dishAllergens
    });
  }

  return {
    ...menu,
    dishes: menuDishes
  };
};

// Insert a new menu into the database
export const insertMenu = async ({ restaurant_id, name, description, image }) => {
  const [result] = await promisePool.execute(
    'INSERT INTO Menu (restaurant_id, name, description, image) VALUES (?, ?, ?, ?)',
    [restaurant_id, name, description, image]
  );

  return {
    id: result.insertId,
    restaurant_id,
    name,
    description,
    image
  };
};
