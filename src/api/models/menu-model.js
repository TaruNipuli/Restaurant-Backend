import promisePool from "../../utils/database.js";

// fetch all menus and associated dishes and allergens
export const getMenus = async () => {
  try {
    // get all menus from the 'Menu' table
    const [menus] = await promisePool.execute('SELECT * FROM Menu');
    const fullMenus = [];

    // Loop through each menu to get its associated dishes
    for (let menu of menus) {
      // get all dishes related to the current menu (based on menu_id)
      const [dishes] = await promisePool.execute('SELECT * FROM Dishes WHERE menu_id = ?', [menu.id]);

      const menuDishes = [];

      // Loop through each dish to get its allergens
      for (let dish of dishes) {
        // Query to get all allergens associated with the current dish 
        const [dishAllergens] = await promisePool.execute(`
          SELECT a.name FROM Dish_Allergen da
          JOIN Allergen a ON da.allergen_id = a.id
          WHERE da.dish_id = ?`, [dish.id]);

        // Add the allergens to the dish object and push it to the menu's dish list
        menuDishes.push({
          ...dish,
          allergens: dishAllergens // Add allergens to the dish object
        });
      }

      // Add the menu with its dishes and allergens to the fullMenus array
      fullMenus.push({
        ...menu,
        dishes: menuDishes // Add the dishes (with allergens) to the menu object
      });
    }


    return fullMenus;

  } catch (error) {
    console.error("Error fetching menus:", error);
    throw new Error("Failed to fetch menus");
  }
};
