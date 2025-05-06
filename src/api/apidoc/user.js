/**
 * @api {get} /user/ Request all user information
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiSuccess {Object[]} users List of all users.
 * @apiSuccess {Number} users.id User ID.
 * @apiSuccess {String} users.name User name.
 * @apiSuccess {String} users.email User email
 * @apiSuccess {String} users.phone_number User phone number
 * @apiSuccess {string} users.password User password
 * @apiSuccess {date} users.registeration_time User time of registration
 * @apiSuccess {string} users.role User role
 *
 */

/**
 * @api {get} /user/:id Request user by id
 * @apiName GetUserById
 * @apiGroup User
 *
 * @apiParam {Number} id User's unique ID
 *
 * @apiSuccess {Object[]} users List of all users.
 * @apiSuccess {Number} users.id User ID.
 * @apiSuccess {String} users.name User name.
 * @apiSuccess {String} users.email User email
 * @apiSuccess {String} users.phone_number User phone number
 * @apiSuccess {string} users.password User password
 * @apiSuccess {date} users.registeration_time User time of registration
 * @apiSuccess {string} users.role User role
 *
 * @apiError UserNotFound The user with the given ID was not found.
 *
 */

/**
 * @api {put} /user/:id Modify user by id
 * @apiName UpdateUserById
 * @apiGroup User
 * 
 * @apiParam {number} id User's unique ID
 * 
 * @apiBody {String} [email] New email of the user.
 * @apiBody {String} [password] New password of the user.
 * @apiBody {String} [confirmPassword] Password confirmation.
 * @apiBody {String} [phone_number] New phone number of the user.

 *
 * @apiSuccess User updated successfully.
 *
 * @apiError User not found.
 */

/**
 * @api {delete} /users/:id Delete user
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {String} message User deleted successfully.
 *
 * @apiError User not found.
 */

/**
 * @api {post} /auth/login User login
 * @apiName LoginUser
 * @apiGroup Auth
 *
 * @apiBody {String} email User email.
 * @apiBody {String} password User password.
 *
 * @apiSuccess {String} Login successful
 * @apiError Internal server error.
 */

/**
 * @api {post} /auth/register User registration
 * @apiName RegisterUser
 * @apiGroup Auth
 *
 * @apiBody {String} name User's username.
 * @apiBody {String} email User email.
 * @apiBody {String} phone_number User phonenumber.
 * @apiBody {String} password User password.
 * @apiBody {String} confirmPassword password confirmation.
 *
 * @apiSuccess {String} New user registered.
 * @apiError Failed to register user.
 */
