let express = require('express');
let router = express.Router();
const gamesController = require("../controllers/gamesController");
/* GET home page. */
router.get('/', gamesController.games_get);
router.post('/', gamesController.games_post);
router.get('/:id/', gamesController.game_id_get);


module.exports = router;
