// src/redux/reducers/cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, CLEAR_CART } from '../actions/cartActions';

const initialState = {
  items: [], // This will hold the items in the cart
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if item already exists in the cart
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        // Item exists, update the quantity
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...state, items: updatedItems };
      } else {
        // Item does not exist, add it to the cart with quantity 1
        return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
      }
      
    case REMOVE_FROM_CART:
      // Remove item from the cart
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
      
    case UPDATE_QUANTITY:
      // Update item quantity in the cart
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };

    case CLEAR_CART: // Handle the clear cart action
      return {
        ...state,
        items: [], // Clear all items from the cart
      };
      
    default:
      return state;
  }
};

export default cartReducer;
