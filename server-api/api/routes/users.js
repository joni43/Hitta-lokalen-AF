const express = require('express');

const UserController = require('../../controllers/users/index');

const router = express.Router();

router.get('/:id', UserController.getUser);
router.post('/', UserController.createUser);
router.patch('/:id', UserController.patchUser);
router.delete('/', UserController.deleteUser);

module.exports = router;
