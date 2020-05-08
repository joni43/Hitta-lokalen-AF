import * as actionTypes from '../actions/types';

const initialState = {};

export const fetchUserOfficeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_OFFICE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.FETCH_USER_OFFICE_SUCCESS:
      return {
        ...state,
        loading: false,
        userOffice: action.payload
      };

    case actionTypes.FETCH_USER_OFFICE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
