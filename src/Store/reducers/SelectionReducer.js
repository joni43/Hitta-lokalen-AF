import * as actionTypes from '../actions/types';
import colorPalette from '../../assets/colorPalette';

const initialState = {
  selectedFloor: 0,
  selectedRoom: 0,
  selectedArea: [],
  inputField: ''
};
export const SelectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_FLOOR:
      if (!state.selectedFloor) {
        console.log('Check it');
      }
      return { ...state, selectedFloor: action.id };

    case actionTypes.SELECT_ROOM:
      return { ...state, selectedRoom: action.id };

    case actionTypes.SEARCH_ROOM:
      console.log(action);
      return { ...state, inputField: action.id };

    case actionTypes.SELECT_AREA:
      let areaIDalreadyExist = state.selectedArea.indexOf(action.id) > -1;
      let copySelectArea = state.selectedArea.slice();

      if (areaIDalreadyExist) {
        copySelectArea = copySelectArea.filter(id => id !== action.id);
      } else {
        copySelectArea.push(action.id);
      }
      return { ...state, selectedArea: copySelectArea, colorPalette };
    default:
      return state;
  }
};
