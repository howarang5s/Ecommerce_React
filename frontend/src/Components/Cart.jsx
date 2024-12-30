import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../Redux/actions/cartActions'; // Import clearCart action
import { ThemeContext } from '../Context/ThemeContext'; // Import ThemeContext
import CheckoutModal from './CheckOut';


function CartModal({ isOpen, onClose, cart }) {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext); // Access the current theme
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); // State for checkout modal


  if (!isOpen) return null;

  const handleRemove = (id) => {
    try {
      dispatch(removeFromCart(id));
    } catch (error) {
      console.error('Error removing item from cart:', error);
      alert('Failed to remove item. Please try again.');
    }
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      alert('Quantity must be greater than 0');
      return;
    }

    try {
      dispatch(updateQuantity(id, quantity));
    } catch (error) {
      console.error('Error updating quantity:', error);
      alert('Failed to update quantity. Please try again.');
    }
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      dispatch(clearCart()); // Dispatch clear cart action
    }
  };

  const handleCheckoutOpen = () => {
    setIsCheckoutOpen(true); // Open the checkout modal
  };

  const handleCheckoutClose = () => {
    setIsCheckoutOpen(false); // Close the checkout modal
  };

  return (
    <div className={`modal-overlay ${theme}`}>
      <div className={`modal-content ${theme}`}>
        <h2 className={`modal-title ${theme}`}>Cart Summary</h2>
        {cart.length === 0 ? (
          <div className={`cart-empty ${theme}`}>Your cart is empty</div>
        ) : (
          <>
            <ul>
              {cart.map(item => (
                <li key={item.id} className={`cart-item-title ${theme}`}>
                  <h3 className={`cart-item-name ${theme}`}>{item.title}</h3>
                  <p className={`cart-item-price ${theme}`}>Price: ${item.price}</p>
                  <div className="cart-item-quantity">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)} 
                      disabled={item.quantity <= 1}
                    >-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => handleRemove(item.id)} className="remove-from-cart-button">Remove</button>
                </li>
              ))}
            </ul>
            <h3 className={`cart-total-price ${theme}`}>
              Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </h3>
            <button onClick={handleCheckoutOpen} className="checkout-button">Proceed to Checkout</button>
            <button onClick={handleClearCart} className="clear-cart-button">Clear Cart</button> {/* Clear Cart button */}
          </>
        )}
        <button onClick={onClose} className="close-modal-button">Close</button>
      </div>
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCheckoutClose} />
    </div>
  );
}

export default CartModal;
