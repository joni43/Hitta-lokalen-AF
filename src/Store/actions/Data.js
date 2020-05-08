import {
  fetchOfficeBegin,
  fetchOfficeSuccess,
  fetchOfficeFailure,
  fetchUserBegin,
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserOfficeBegin,
  fetchUserOfficeSuccess,
  fetchUserOfficeFailure
} from './Fetch_actions';

//  HTTP errors .
const handleErrors = response => {
  if (!response.ok) {
    console.log('ERROR NEEDS');
    throw Error(response);
  }
  return response;
};

export const patchUser = async floorID => {
  const userURL = 'http://localhost:4000/users/aaaaa';
  const data = floorID;
  try {
    await fetch(userURL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  } catch (error) {
    handleErrors();
  }
};

export const fetchUser = data => async (dispatch, getState) => {
  const userData = 'http://localhost:4000/users/aaaaa';
  try {
    dispatch(fetchUserBegin());
    const response = await fetch(`${userData}`);

    const user = await response.json();
    dispatch(fetchUserSuccess(user));
  } catch (error) {
    dispatch(fetchUserFailure(error));
  }
};

// Offices
export const fetchOffices = data => async (dispatch, getState) => {
  const addresses = 'http://localhost:4000/addresses';

  try {
    dispatch(fetchOfficeBegin());
    const response = await fetch(`${addresses}`);
    const offices = await response.json();

    dispatch(fetchOfficeSuccess(offices));
  } catch (error) {
    console.log('throwing error', error);
    dispatch(fetchOfficeFailure(error));
  }
};
export const fetchUserOffice = data => async dispatch => {
  const addresses = 'http://localhost:4000/addresses';
  try {
    dispatch(fetchUserOfficeBegin());
    const response = await fetch(`${addresses}/${data}`);
    const userOffice = await response.json();

    dispatch(fetchUserOfficeSuccess(userOffice));
  } catch (error) {
    dispatch(fetchUserOfficeFailure(error));
  }
};
