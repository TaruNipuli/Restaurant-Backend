import promisePool from '../../utils/database.js';

// Fetch opening hours for the restaurant from the database
export const getOpeningHours = async (restaurantId) => {
    try {
        const [rows] = await promisePool.query(
            "SELECT weekday, open_time, closed_time FROM Opening_hours WHERE restaurant_id = ?",
            [restaurantId]
        );
        return rows;
    } catch (error) {
        console.error("Error fetching opening hours:", error);
        throw error;
    }
};