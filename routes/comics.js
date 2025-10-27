const comicsController = require('../controllers/comicsController');
const router = require('express').Router();
router.get('/', comicsController.getComics);
module.exports = router;