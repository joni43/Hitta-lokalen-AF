import * as actionTypes from '../actions/types';

const initialState = {
  offices: []
};

export const FetchOfficesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_OFFICE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.FETCH_OFFICE_SUCCESS:
      return {
        ...state,
        loading: false,
        offices: action.payload
      };

    case actionTypes.FETCH_OFFICE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
