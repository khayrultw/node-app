const router = require('express').Router()
const tutorials = require('../controllers/tutorial.controller')

router.get('/', tutorials.findAll)
router.post('/', tutorials.create)
router.put('/:id', tutorials.update)
router.delete('/:id', tutorials.delete)

module.exports = router