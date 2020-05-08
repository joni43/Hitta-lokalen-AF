const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const Errorhandler = require('../../helpers/errors');
// Handle incoming GET requests to /users
const getUser = async (req, res, next) => {
  console.log(res.status);
  try {
    const { id } = req.params;
    const findUser = await User.findOne().where('id', id);
    if (findUser === null) {
      const error = new Error('User do not exist!');
      error.status = 404;
      next(error);
    } else {
      res.json(findUser);
    }
  } catch (error) {
    // Catchar error
    console.log(error);
    error = new Error(
      'Something wrong with the URL, IDs can only contain numbers,',
      error
    );
    error.status = 404;
    next(error);
  }
};

module.exports = getUser;
