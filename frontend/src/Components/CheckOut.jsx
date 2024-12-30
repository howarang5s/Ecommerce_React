// src/components/CheckoutModal.js

import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../Redux/actions/userAction';
import { ThemeContext } from '../Context/ThemeContext'; // Import ThemeContext
import { clearCart } from '../Redux/actions/cartActions';

function CheckoutModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext); // Access the current theme
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dispatch the action to save user details in Redux
    dispatch(setUserDetails(formData));

    // Clear the form
    setFormData({ name: '', email: '', address: '', phone: '' });

    dispatch(clearCart());

    // Call the onClose function
    onClose();

    // Optionally, display a confirmation message
    alert('Checkout successful!'); // Placeholder for confirmation message
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-checkout-overlay ${theme}`}>
      <div className={`modal-checkout-content ${theme}`}>
        <h2 className={`modal-checkout-title ${theme}`}>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit" className="checkout-button">Complete Checkout</button>
        </form>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
}

export default CheckoutModal;
