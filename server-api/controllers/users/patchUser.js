const express = require('express');
const router = express.Router();
const User = require('../../models/user');

const patchUser = async (req, res, next) => {
  //const id = req.params.userID;
  try {
    let { id } = req.params;
    let updateOps = {};

    updateOps = { officeID, floorID } = req.body;

    console.log(updateOps);

    let updateUser = await User.updateOne({ id }, { $set: updateOps });

    res.json(updateUser);
  } catch (error) {
    return next(error);
  }
};

module.exports = patchUser;
