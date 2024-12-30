// src/redux/reducers/filterReducer.js
import { SET_FILTER, RESET_FILTER } from '../actions/filterAction';

const initialState = {
  selectedCategories: [], // Array of selected categories
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        selectedCategories: action.payload, // Update selected categories array
      };
    case RESET_FILTER:
      return {
        ...state,
        selectedCategories: [], // Reset to empty array to show all products
      };
    default:
      return state;
  }
};

export default filterReducer;
