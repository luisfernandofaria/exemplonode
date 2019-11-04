const express = require('express');
const router = express.Router();
const directorController = require('../app/api/controllers/director');

router.get('/', directorController.getAll);
router.post('/', directorController.create);
router.get('/:directorId', directorController.getById);
router.put('/:directorId', directorController.updateById);
router.delete('/:directorId', directorController.deleteById);

module.exports = router;