/**
 * @api {post} /dishes Create a new dish
 * @apiName CreateDish
 * @apiGroup Dishes
 *
 * @apiBody {Number} menu_id ID of the menu the dish belongs to.
 * @apiBody {String} dish_name Name of the dish.
 * @apiBody {String} type Type of the dish (e.g. appetizer, main, dessert).
 * @apiBody {String} description Description of the dish.
 * @apiBody {Number} price Price of the dish.
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Object} dish Created dish object.
 * @apiSuccess {Number} dish.id ID of the created dish.
 * @apiSuccess {Number} dish.menu_id Menu ID.
 * @apiSuccess {String} dish.dish_name Name of the dish.
 * @apiSuccess {String} dish.type Type of the dish.
 * @apiSuccess {String} dish.description Description.
 * @apiSuccess {Number} dish.price Price.
 *
 * @apiError (400) {String} message Missing required fields.
 * @apiError (500) {String} message Failed to create dish.
 */

/**
 * @api {get} /dishes Get all dishes
 * @apiName GetDishes
 * @apiGroup Dishes
 *
 * @apiSuccess {Object[]} dishes List of all dishes.
 *
 * @apiError (500) {String} message Failed to fetch dishes.
 */

/**
 * @api {get} /dishes/:id Get dish by ID
 * @apiName GetDishById
 * @apiGroup Dishes
 *
 * @apiParam {Number} id Dish ID.
 *
 * @apiSuccess {Object} dish Dish object.
 *
 * @apiError (404) {String} message Dish not found.
 * @apiError (500) {String} message Failed to fetch dish.
 */

/**
 * @api {put} /dishes/:id Update a dish
 * @apiName UpdateDish
 * @apiGroup Dishes
 *
 * @apiParam {Number} id Dish ID.
 * @apiBody {Number} [menu_id] Updated menu ID.
 * @apiBody {String} [dish_name] Updated name.
 * @apiBody {String} [type] Updated type.
 * @apiBody {String} [description] Updated description.
 * @apiBody {Number} [price] Updated price.
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Object} dish Updated dish object.
 *
 * @apiError (400) {String} message Invalid or missing data.
 * @apiError (404) {String} message Dish not found.
 * @apiError (500) {String} message Failed to update dish.
 */

/**
 * @api {delete} /dishes/:id Delete a dish
 * @apiName DeleteDish
 * @apiGroup Dishes
 *
 * @apiParam {Number} id Dish ID.
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiError (404) {String} message Dish not found.
 * @apiError (500) {String} message Failed to delete dish.
 */
