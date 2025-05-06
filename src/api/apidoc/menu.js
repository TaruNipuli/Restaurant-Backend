/**
 * @api {get} /menus Fetch all menus
 * @apiName FetchMenus
 * @apiGroup Menu
 *
 * @apiSuccess {Object[]} menus List of all menus.
 * @apiSuccess {Number} menus.id Menu ID.
 * @apiSuccess {String} menus.name Menu name.
 * @apiSuccess {String} menus.description Menu description.
 * @apiSuccess {String} menus.image Menu image filename.
 * @apiSuccess {Object[]} menus.dishes List of dishes in the menu.
 * @apiSuccess {Number} menus.dishes.id Dish ID.
 * @apiSuccess {String} menus.dishes.name Dish name.
 * @apiSuccess {String} menus.dishes.description Dish description.
 * @apiSuccess {Object[]} menus.dishes.allergens List of allergens in the dish.
 * @apiSuccess {String} menus.dishes.allergens.name Allergen name.
 *
 * @apiError InternalServerError The server encountered an error while fetching menus.
 */

/**
 * @api {get} /menus/:id Fetch menu by ID
 * @apiName FetchMenuById
 * @apiGroup Menu
 *
 * @apiParam {Number} id Menu's unique ID.
 *
 * @apiSuccess {Number} id Menu ID.
 * @apiSuccess {String} name Menu name.
 * @apiSuccess {String} description Menu description.
 * @apiSuccess {String} image Menu image filename.
 * @apiSuccess {Object[]} dishes List of dishes in the menu.
 * @apiSuccess {Number} dishes.id Dish ID.
 * @apiSuccess {String} dishes.name Dish name.
 * @apiSuccess {String} dishes.description Dish description.
 * @apiSuccess {Object[]} dishes.allergens List of allergens in the dish.
 * @apiSuccess {String} dishes.allergens.name Allergen name.
 *
 * @apiError MenuNotFound The menu with the given ID was not found.
 * @apiError InternalServerError The server encountered an error while fetching the menu.
 */

/**
 * @api {post} /menus Create a new menu
 * @apiName CreateMenu
 * @apiGroup Menu
 *
 * @apiBody {Number} restaurant_id Restaurant ID to which the menu belongs.
 * @apiBody {String} name Menu name.
 * @apiBody {String} description Menu description.
 * @apiBody {String} [image] Menu image filename.
 *
 * @apiSuccess {String} message Menu created successfully.
 * @apiSuccess {Object} menu The created menu object.
 * @apiSuccess {Number} menu.id Menu ID.
 * @apiSuccess {Number} menu.restaurant_id Restaurant ID.
 * @apiSuccess {String} menu.name Menu name.
 * @apiSuccess {String} menu.description Menu description.
 * @apiSuccess {String} menu.image Menu image filename.
 *
 * @apiError ValidationError Invalid input data.
 * @apiError InternalServerError The server encountered an error while creating the menu.
 */

/**
 * @api {delete} /menus/:id Delete a menu by ID
 * @apiName DeleteMenu
 * @apiGroup Menu
 *
 * @apiParam {Number} id Menu's unique ID.
 *
 * @apiSuccess {String} message Menu deleted successfully.
 *
 * @apiError MenuNotFound The menu with the given ID was not found.
 * @apiError InternalServerError The server encountered an error while deleting the menu.
 */

/**
 * @api {put} /menus/:id Update a menu by ID
 * @apiName UpdateMenu
 * @apiGroup Menu
 *
 * @apiParam {Number} id Menu's unique ID.
 *
 * @apiBody {Number} [restaurant_id] Updated restaurant ID.
 * @apiBody {String} [name] Updated menu name.
 * @apiBody {String} [description] Updated menu description.
 * @apiBody {String} [image] Updated menu image filename.
 *
 * @apiSuccess {String} message Menu updated successfully.
 *
 * @apiError MenuNotFound The menu with the given ID was not found.
 * @apiError InternalServerError The server encountered an error while updating the menu.
 */