/**
 * @api {get} /games List all games
 * @apiName GetGames
 * @apiGroup Games
 * @apiDescription Lists all games
 */
exports.games_get = (req, res, next) => {
    res.send("get games list");
}

/**
 * @api {psot} /games Create new game
 * @apiName CreateGame
 * @apiGroup Games
 * @apiDescription Creates a new game
 */
exports.games_post = (req, res, next) => {
    res.send("create game");
}

/**
 * @api {get} /games/:id Request game
 * @apiName GetGame
 * @apiGroup Games
 * @apiDescription Requests a game
 * @apiError GameNotFound The <code>id</code> of the Game was not found
 */
exports.game_id_get = (req, res, next) => {
    res.send("get game id "+req.params.id);
}
