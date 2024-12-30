// src/components/CartIcon.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/cartContext';

function CartIcon() {
  const { totalItems, error } = useContext(CartContext);

  return (
    <div className="cart-icon">
      <Link to="/cart" className="cart-link">
        <span className="cart-text">Cart ({totalItems})</span>
      </Link>
      {error && <div className="error-message">{error}</div>} {/* Display error message if exists */}
    </div>
  );
}

export default CartIcon;
