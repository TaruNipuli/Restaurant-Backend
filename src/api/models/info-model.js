import promisePool from "../../utils/database.js";

// Fetch the restaurant info from the database
export const getRestaurantInfo = async () => {
    try {
        const [rows] = await promisePool.query(
            "SELECT name, address, postal_code, city, contact_number, email FROM Restaurant WHERE id = 1"
        );
        return rows[0];
    } catch (error) {
        throw new Error("Error fetching restaurant info: " + error.message);
    }
};

// Fetch opening hours
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