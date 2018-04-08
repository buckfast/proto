
/**
 * @api {get} /users List all users
 * @apiName GetUsers
 * @apiGroup Users
 * @apiDescription Lists all users
 */
exports.users_get = (req, res, next) => {
    if (req.query.length == 0) {
        res.send("get users list");
    } else {
      if (req.query.name) {
        res.send("search users by name "+req.query.name);
      } else {
        res.send("not found");
      }
    }

}

/**
 * @api {post} /users Create new user
 * @apiName CreateUser
 * @apiGroup Users
 * @apiDescription Creates a new user
 */
exports.users_post = (req, res, next) => {
    res.send("create new user");
}

/**
 * @api {get} /users/:id Request user information
 * @apiName GetUser
 * @apiGroup Users
 * @apiDescription Requests user information
 * @apiError UserNotFound The <code>id</code> of the User was not found
 */
exports.user_id_get = (req, res, next) => {
    res.send("get user id "+req.params.id);
}

/**
 * @api {post} /users/:id Update user information
 * @apiName UpdateUser
 * @apiGroup Users
 * @apiDescription Updates user information
 * @apiError UserNotFound The <code>id</code> of the User was not found
 */
exports.user_id_post = (req, res, next) => {
    res.send("update user id "+req.params.id);
}

/**
 * @api {delete} /users/:id Delete user
 * @apiName DeleteUser
 * @apiGroup Users
 * @apiDescription Deletes user
 * @apiError UserNotFound The <code>id</code> of the User was not found
 */
exports.user_id_delete = (req, res, next) => {
    res.send("delete user id "+req.params.id);
}
