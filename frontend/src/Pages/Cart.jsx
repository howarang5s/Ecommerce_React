// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, updateQuantity } from '../Redux/actions/cartActions';
// import '../App.css'; // Import your CSS file for styles

// function Cart() {
//   const cart = useSelector(state => state.cart.items);
//   const dispatch = useDispatch();

//   // Increase quantity by 1
//   const handleQuantityIncrease = (item) => {
//     dispatch(updateQuantity(item.id, item.quantity + 1));
//   };

//   // Decrease quantity by 1
//   const handleQuantityDecrease = (item) => {
//     if (item.quantity > 1) {
//       dispatch(updateQuantity(item.id, item.quantity - 1));
//     }
//   };

//   // Update quantity based on user input
//   const handleQuantityChange = (id, quantity) => {
//     if (quantity < 1) return; // Prevent setting quantity to less than 1
//     dispatch(updateQuantity(id, quantity));
//   };

//   // Remove item from cart
//   const handleRemoveFromCart = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   // Calculate total price
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul className="cart-item-list">
//           {cart.map(item => (
//             <li key={item.id} className="cart-item">
//               <h2>{item.title}</h2>
//               <p>Price: ${item.price.toFixed(2)}</p>
//               <div className="quantity-control">
//                 <button onClick={() => handleQuantityDecrease(item)} className="quantity-button">-</button>
//                 <input 
//                   type="number" 
//                   value={item.quantity} 
//                   min="1" 
//                   onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
//                   className="quantity-input"
//                 />
//                 <button onClick={() => handleQuantityIncrease(item)} className="quantity-button">+</button>
//               </div>
//               <button onClick={() => handleRemoveFromCart(item.id)} className="remove-button">Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <h2>Total: ${totalPrice.toFixed(2)}</h2>
//     </div>
//   );
// }

// export default Cart;
