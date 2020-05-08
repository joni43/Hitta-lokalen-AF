const express = require('express');
const router = express.Router();
const Office = require('../../models/office');

const getOfficeFloors = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findFloors = await Office.findById(id);

    if (findFloors) {
      const getfloors = [...findFloors.floors];
      const floors = [];
      getfloors.map(floor => {
        floors.push({ title: floor.title, id: floor.id });
      });
      res.json(floors);
    }
  } catch (error) {
    error = new Error('No valid entry found for provided ID');
    error.status = 404;
    next(error);
  }
};

module.exports = getOfficeFloors;
