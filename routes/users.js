let express = require('express');
let router = express.Router();
const usersController = require("../controllers/usersController");
/* GET home page. */
router.get('/', usersController.users_get);
router.post('/', usersController.users_post);
router.get('/:id/', usersController.user_id_get);
router.post('/:id/', usersController.user_id_post);
router.delete('/:id/', usersController.user_id_delete);

module.exports = router;
