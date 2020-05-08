import * as actionTypes from './types';

export const searchRoom = id => ({
  type: actionTypes.SEARCH_ROOM,
  id
});

export const selectFloor = id => ({
  type: actionTypes.SELECT_FLOOR,
  id
});

export const selectRoom = id => {
  console.log('id on this', id);
  return {
    type: actionTypes.SELECT_ROOM,
    id
  };
};

export const selectArea = (id, index) => {
  console.log('area id', id, 'r indx', index);
  return {
    type: actionTypes.SELECT_AREA,
    id
  };
};

export const addressChanged = addressID => {
  return {
    type: actionTypes.ADDRESS_CHANGED,
    addressID: addressID
  };
};

export const floorChanged = floorID => {
  console.log('FLOOR ID ACTIOn', floorID);
  return {
    type: actionTypes.FLOOR_CHANGED,
    floorID: floorID
  };
};
