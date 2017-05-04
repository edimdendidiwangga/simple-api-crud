const router = require('express').Router();
const foodController = require('../controllers/foods')

router.get('/', foodController.getAll)
router.get('/:id', foodController.getById)
router.post('/', foodController.insertOne)
router.put('/:id', foodController.updateById)
router.delete('/:id', foodController.deleteById)

module.exports = router;
