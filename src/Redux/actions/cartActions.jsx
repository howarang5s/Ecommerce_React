// src/redux/actions/cartActions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART'; // New action type

// Action to add a product to the cart
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: { ...product, quantity: 1 }, // Set initial quantity to 1
  };
};

// Action to remove a product from the cart
export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

// Action to update product quantity in the cart
export const updateQuantity = (id, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { id, quantity },
  };
};

// Action to clear the cart
export const clearCart = () => {
  return {
    type: CLEAR_CART, // Action to clear the cart
  };
};
