const express = require('express');
const router = express.Router();
const Office = require('../../models/office');

/**
 * GET /:OfficeID
 * Leverer all data för ett visst office
 * { ... }
 */
const getOneOffice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findOffice = await Office.findById(id);
    if (findOffice === null) {
      const error = new Error('Office do not exist!');
      error.status = 404;
      next(error);
    }
    res.status(200).json(findOffice);
  } catch (error) {
    error = new Error('No valid entry found for provided ID');
    error.status = 404;
    next(error);
  }
};

module.exports = getOneOffice;
