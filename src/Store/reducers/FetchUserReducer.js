import * as actionTypes from '../actions/types';

const initialState = {
  //   items: [],
  //   loading: false,
  //   error: null,
  user: { name: '', location: '', floorID: null, id: '', officeID: null }
};

export const FetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case actionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case actionTypes.ADDRESS_CHANGED:
      return {
        user: { ...state.user, officeID: action.addressID }
      };
    case actionTypes.FLOOR_CHANGED:
      return {
        user: { ...state.user, floorID: action.floorID }
      };
    default:
      return state;
  }
};
