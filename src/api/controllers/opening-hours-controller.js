import { getOpeningHours } from '../models/opening-hours-model.js';

// Fetch opening hours for a restaurant
export const fetchOpeningHours = async (req, res) => {
    try {
        const restaurantId = req.params.id || 1; 
        const hours = await getOpeningHours(restaurantId);
        res.json(hours);
    } catch (error) {
        res.status(500).json({ message: "Error fetching opening hours" });
    }
};