// src/Redux/actions/userActions.js

export const SET_USER_DETAILS = 'SET_USER_DETAILS';

export const setUserDetails = (userDetails) => {
  return {
    type: SET_USER_DETAILS,
    payload: userDetails,
  };
};
