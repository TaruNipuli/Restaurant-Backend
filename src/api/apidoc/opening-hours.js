/**
 * @api {get} /opening-hours/ Get opening hours
 * @apiName GetOpeningHours
 * @apiGroup Opening Hours
 *
 * @apiSuccess {String} weekday Day of the week
 * @apiSuccess {Time} open_time Opening time of the restaurant
 * @apiSuccess {Time} closed_time Closing time of the restaurant
 *
 * @apiError (500) Error fetching opening hours
 */
