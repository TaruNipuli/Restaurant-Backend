/**
 * @api {get} /allergens Get all allergens
 * @apiName GetAllAllergens
 * @apiGroup Allergens
 *
 * @apiSuccess {Object[]} allergens List of allergen objects.
 *
 * @apiError (500) Error fetching allergens
 */

/**
 * @api {get} /allergens/:id Get allergen by ID
 * @apiName GetAllergenById
 * @apiGroup Allergens
 *
 * @apiParam {Number} id Allergen ID.
 *
 * @apiSuccess {Object} allergen Allergen object.
 *
 * @apiError (404) Allergen not found.
 * @apiError (500) Error retrieving allergen.
 */

/**
 * @api {post} /allergens Create a new allergen
 * @apiName CreateAllergen
 * @apiGroup Allergens
 *
 * @apiBody {String} name Name of the allergen.
 *
 * @apiSuccess (201) Allergen created successfully
 * @apiSuccess {Object} allergen Created allergen object
 *
 * @apiError (500) Failed to create allergen
 */

/**
 * @api {post} /allergens/link Link allergen to dish
 * @apiName LinkAllergenToDish
 * @apiGroup Allergens
 *
 * @apiBody {Number} dish_id ID of the dish.
 * @apiBody {Number} allergen_id ID of the allergen.
 *
 * @apiSuccess Allergen linked to dish successfully
 *
 * @apiError (500) Failed to link allergen to dish
 */

/**
 * @api {post} /allergens/unlink Unlink allergen from dish
 * @apiName UnlinkAllergenFromDish
 * @apiGroup Allergens
 *
 * @apiBody {Number} dish_id ID of the dish.
 * @apiBody {Number} allergen_id ID of the allergen.
 *
 * @apiSuccess Allergen removed from dish successfully
 *
 * @apiError (500) Failed to remove allergen from dish
 */

/**
 * @api {delete} /allergens/:id Delete allergen
 * @apiName DeleteAllergen
 * @apiGroup Allergens
 *
 * @apiParam {Number} id Allergen ID.
 *
 * @apiSuccess message: 'Allergen deleted successfully'
 *
 * @apiError (404) Allergen not found'
 * @apiError (500) Failed to delete allergen
 */
