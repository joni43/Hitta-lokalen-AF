import * as actionTypes from './types';

// Fetch the all offices from mongoDB
export const fetchOfficeBegin = () => ({
  type: actionTypes.FETCH_OFFICE_BEGIN
});

export const fetchOfficeSuccess = offices => {
  return {
    type: actionTypes.FETCH_OFFICE_SUCCESS,
    payload: offices
  };
};

export const fetchOfficeFailure = error => {
  return {
    type: actionTypes.FETCH_OFFICE_FAILURE,
    payload: { error }
  };
};

// FETCH USER OFFICE
export const fetchUserOfficeBegin = () => ({
  type: actionTypes.FETCH_USER_OFFICE_BEGIN
});
export const fetchUserOfficeSuccess = office => {
  return {
    type: actionTypes.FETCH_USER_OFFICE_SUCCESS,
    payload: office
  };
};
export const fetchUserOfficeFailure = error => {
  return {
    type: actionTypes.FETCH_USER_OFFICE_FAILURE,
    payload: { error }
  };
};

// FETCH USER
export const fetchUserBegin = () => ({
  type: actionTypes.FETCH_USER_BEGIN
});

export const fetchUserSuccess = user => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    payload: user
  };
};

export const fetchUserFailure = error => ({
  type: actionTypes.FETCH_USER_FAILURE,
  payload: error
});
