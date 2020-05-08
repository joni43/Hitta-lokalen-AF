const express = require('express');
const router = express.Router();
const Office = require('../../models/office');

/**
 * GET /
 * Levererar en array med officesIDn
 * [{ id: 237475872, title: 'Solna Strand' }, { ... }]
 */
const getOffices = async (req, res, next) => {
  try {
    const findOffices = await Office.find();
    if (findOffices.length >= 0) {
      const getOffice = [...findOffices];

      const offices = [];
      getOffice.map(office => {
        offices.push({ title: office.title, id: office.id });
      });
      res.status(200).json(offices);

      return;
    } else {
      res.json(findUser);
      return;
    }
  } catch (error) {
    // Catchar error
    console.log('error', error);
    return next(error);
  }
};

module.exports = getOffices;
