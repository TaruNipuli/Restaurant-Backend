import promisePool from "../../utils/database.js";

// fetch all menus and their associated dishes and allergens
export const getMenus = async () => {
  try {
    // get all menus from the 'Menu' table
    const [menus] = await promisePool.execute('SELECT * FROM Menu');
    const fullMenus = [];

    // loop through each menu to fetch its dishes
    for (let menu of menus) {
      // get all dishes related to the current menu (based on menu_id)
      const [dishes] = await promisePool.execute('SELECT * FROM Dishes WHERE menu_id = ?', [menu.id]);

      const menuDishes = [];

      // loop through each dish to fetch its allergens
      for (let dish of dishes) {
        // query to get all allergens associated with the current dish
        const [dishAllergens] = await promisePool.execute(`
          SELECT a.name FROM Dish_Allergen da
          JOIN Allergen a ON da.allergen_id = a.id
          WHERE da.dish_id = ?`, [dish.id]);

        // add the dish along with its allergens to the menu's dish list
        menuDishes.push({
          ...dish,
          allergens: dishAllergens // add allergens to the dish object
        });
      }

      // add the menu with its dishes (each including allergens) to the fullMenus array
      fullMenus.push({
        ...menu,
        dishes: menuDishes // add the dishes to the menu object
      });
    }

    return fullMenus;

  } catch (error) {
    console.error("Error fetching menus:", error);
    throw new Error("Failed to fetch menus");
  }
};

// fetch a single menu by id, including its dishes and allergens
export const getMenuById = async (id) => {
  try {
    // get the specific menu based on its id
    const [menus] = await promisePool.execute('SELECT * FROM Menu WHERE id = ?', [id]);
    if (menus.length === 0) {
      return null; // if no menu found, return null
    }

    const menu = menus[0];

    // get all dishes related to the menu
    const [dishes] = await promisePool.execute('SELECT * FROM Dishes WHERE menu_id = ?', [menu.id]);

    const menuDishes = [];

    // loop through each dish to fetch its allergens
    for (let dish of dishes) {
      // query to get all allergens associated with the current dish
      const [dishAllergens] = await promisePool.execute(`
        SELECT a.name FROM Dish_Allergen da
        JOIN Allergen a ON da.allergen_id = a.id
        WHERE da.dish_id = ?`, [dish.id]);

      // add the dish along with its allergens to the menu's dish list
      menuDishes.push({
        ...dish,
        allergens: dishAllergens // add allergens to the dish object
      });
    }

    // return the menu with its dishes and allergens
    return {
      ...menu,
      dishes: menuDishes
    };

  } catch (error) {
    console.error("Error fetching menu by ID:", error);
    throw new Error("Failed to fetch menu");
  }
};
