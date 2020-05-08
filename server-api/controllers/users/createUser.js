const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const creatingUser = require('../../helpers/errors');
const mongoose = require('mongoose');

const creatUser = async (req, res) => {
  try {
    const { id, officeID, floorID } = req.body;
    const user = new User({ id, officeID, floorID });
    // Sparar den skapade användaren in till databasen
    const userCreate = await user.save();
    res.json(userCreate);
  } catch (error) {
    // Catchar error
    return next(error);
  }
};
module.exports = creatUser;
