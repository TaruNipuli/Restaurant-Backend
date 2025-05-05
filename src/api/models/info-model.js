import promisePool from "../../utils/database.js";


// Fetch restaurant info from the database
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