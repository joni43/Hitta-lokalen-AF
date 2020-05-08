const express = require('express');

const UserController = require('../../controllers/offices/index');

const router = express.Router();

router.get('/', UserController.getAllOffices);
router.get('/:id', UserController.getOneOffice);
router.get('/:id/floors', UserController.getOfficeFloors);
router.get('/:id/floors/:floorID', UserController.getOneOfficeFloor);

module.exports = router;
