// src/context/CartContext.js
import React, { createContext, useState } from 'react';

// Create a CartContext to be used globally
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  // Add item to cart
  const addToCart = (product) => {
    try {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        setCart(cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
      setError(null); // Clear error if successful
    } catch (err) {
      console.error('Error adding item to cart:', err);
      setError('Failed to add item to cart. Please try again.');
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    try {
      setCart(cart.filter(item => item.id !== productId));
      setError(null); // Clear error if successful
    } catch (err) {
      console.error('Error removing item from cart:', err);
      setError('Failed to remove item from cart. Please try again.');
    }
  };

  // Update quantity of a product
  const updateQuantity = (productId, quantity) => {
    try {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
      setError(null); // Clear error if successful
    } catch (err) {
      console.error('Error updating quantity:', err);
      setError('Failed to update quantity. Please try again.');
    }
  };

  // Calculate total cart items
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalItems, error }}>
      {children}
    </CartContext.Provider>
  );
}
