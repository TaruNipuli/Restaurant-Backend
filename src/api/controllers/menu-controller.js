import menus from '../models/menu-model.js';

// return mock menu data
export const getMenus = (req, res) => {
    res.status(200).json(menus);
};
