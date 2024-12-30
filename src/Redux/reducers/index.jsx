// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducers';
import filterReducer from './filterReducer';
import productReducer from './productReducer'; // Import your product reducer

const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterReducer,
  products: productReducer, // Add productReducer here
});

export default rootReducer;
