import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Redux/actions/cartActions';
import { ThemeContext } from '../Context/ThemeContext'; // Import ThemeContext
import '../App.css'; // Ensure your CSS file is imported

const ProductDetail = () => {
    const { id } = useParams(); // Get product ID from URL
    const navigate = useNavigate(); // For navigation
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);

    // Access the theme context
    const { theme } = useContext(ThemeContext); // Get the current theme

    // Get products from Redux store
    const products = useSelector((state) => state.products.items); 

    // Find product in the store
    const product = products.find(product => product.id === parseInt(id));

    // Handle product not found
    if (!product) {
        return <div>Product not found.</div>; // Error message for product not found
    }

    // Handle adding to cart
    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setTimeout(() => {
            alert('Item is added');
        }, 1000);
    };

    // Handle back button
    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className={`product-detail-container ${theme}`}> {/* Add theme class */}
            <h1 className='product-detail-title'>{product.title}</h1>
            <img src={product.image} className='product-detail-image' alt={product.title} />
            <p className='product-detail-description'>{product.description}</p>
            <p className='product-detail-price'>${product.price}</p>
            <div className="button-container">
                <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                <button className="back-button" onClick={handleBack}>Back</button>
            </div>
        </div>

    );
};

export default ProductDetail;
