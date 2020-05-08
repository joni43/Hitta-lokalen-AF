const express = require('express');
const users = require('./users');
const offices = require('./offices');

const router = express.Router();

router.use(express.json());

router.use('/users', users);
router.use('/addresses', offices);

module.exports = router;
