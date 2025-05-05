import { getRestaurantInfo, getOpeningHours } from "../models/info-model.js";

// Restaurant info
export const fetchInfo = async (req, res) => {
    try {
        const restaurantInfo = await getRestaurantInfo();
        res.status(200).json(restaurantInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Opening hours
export const fetchOpeningHours = async (req, res) => {
    try {
        const restaurantId = req.params.id || 1;
        const hours = await getOpeningHours(restaurantId);
        res.json(hours);
    } catch (error) {
        res.status(500).json({ message: "Error fetching opening hours" });
    }
};
