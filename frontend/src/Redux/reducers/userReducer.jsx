// src/Redux/reducers/userReducer.js

import { SET_USER_DETAILS } from '../actions/userActions';

const initialState = {
  name: '',
  email: '',
  address: '',
  phone: '',
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        ...action.payload, // Set user details
      };
    // ... other cases like LOGIN_USER, LOGOUT_USER
    default:
      return state;
  }
};

export default userReducer;
