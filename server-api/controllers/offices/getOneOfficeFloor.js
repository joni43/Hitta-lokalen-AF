const express = require('express');
const router = express.Router();
const Office = require('../../models/office');

/**
 * GET /:OfficeID/floors/:floorID
 * Leverer all data för ett visst floor i ett office
 * { ... }
 */

const getFloorId = async (req, res, next) => {
  try {
    const id = req.params.id;
    // const { id } = req.params;
    console.log(id);
    const floorId = parseInt(req.params.floorID, 10);

    const getfloorData = await Office.findById(id);

    if (getfloorData) {
      const getfloors = [...getfloorData.floors];

      let currentFloor = {};
      getfloors.map(floor => {
        console.log(floorId === floor.id);
        if (floorId === floor.id) {
          currentFloor = {
            title: floor.title,
            id: floor.id,
            width: floor.width,
            height: floor.height,
            areas: floor.areas,
            rooms: floor.rooms
          };
          res.status(200).json(currentFloor);
        } else {
          console.log('HHHH');
          error = new Error(
            'No valid entry found for provided ID, wrong id or id do not exist'
          );
          error.status = 404;
          next(error);
        }
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getFloorId;
