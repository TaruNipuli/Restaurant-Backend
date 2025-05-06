/**
 * @api {get} /info/ Get restaurant info
 * @apiName GetInfo
 * @apiGroup Info
 *
 * @apiSuccess {String} name Name of the restaurant
 * @apiSuccess {String} address Address of the restaurant
 * @apiSuccess {String} postal_code Postal code of the restaurant
 * @apiSuccess {String} city City restaurant is located in
 * @apiSuccess {String} contact_number Contact number for the restaurant
 * @apiSuccess {String} email Email for the restaurant
 *
 * @apiError (500) Error fetching info
 */
