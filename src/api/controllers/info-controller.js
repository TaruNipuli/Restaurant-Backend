

import { getRestaurantInfo } from '../models/info-model.js';

// Fetch restaurant info
export const fetchInfo = async (req, res) => {
    try {
        const restaurantInfo = await getRestaurantInfo();
        res.status(200).json(restaurantInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};