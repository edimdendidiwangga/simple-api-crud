const router = require('express').Router();
const restaurantController = require('../controllers/restaurants')

router.get('/', restaurantController.getAll)
router.get('/:id', restaurantController.getById)
router.post('/', restaurantController.insertOne)
router.put('/:id', restaurantController.updateById)
router.delete('/:id', restaurantController.deleteById)

module.exports = router;
