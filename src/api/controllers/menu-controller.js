import { menus, dishes, allergens, dish_allergen } from '../models/menu-model.js';

// get menus
export const getMenus = (req, res) => {
    const fullMenus = menus.map(menu => {
        // get menu dishes
        const menuDishes = dishes
            .filter(dish => dish.menu_id === menu.id)
            .map(dish => {
                // get allergens for the dish
                const dishAllergens = dish_allergen
                    .filter(da => da.dish_id === dish.id)
                    .map(da => allergens.find(allergen => allergen.id === da.allergen_id));

                return {
                    ...dish,
                    allergens: dishAllergens
                };
            });

        return {
            ...menu,
            dishes: menuDishes
        };
    });

    res.status(200).json(fullMenus);
};
