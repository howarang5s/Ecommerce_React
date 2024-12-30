// src/redux/actions/filterActions.js
export const SET_FILTER = 'SET_FILTER';
export const RESET_FILTER = 'RESET_FILTER'; // New action type for resetting filter

// Action to set or toggle categories
export const setFilter = (category) => (dispatch, getState) => {
  const { filter } = getState(); // Access current state
  let updatedCategories;

  if (filter.selectedCategories.includes(category)) {
    // Remove category from the array if it's already selected
    updatedCategories = filter.selectedCategories.filter(cat => cat !== category);
  } else {
    // Add category to the array if it's not selected
    updatedCategories = [...filter.selectedCategories, category];
  }

  dispatch({
    type: SET_FILTER,
    payload: updatedCategories,
  });
};

// Action to reset the filter
export const resetFilter = () => {
  return {
    type: RESET_FILTER, // Dispatch the reset filter action
  };
};
