import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure the styles are imported
import { useTheme } from '../Context/ThemeContext'; // Import the useTheme hook

function ProductCard({ product, isAllProducts }) {
  const { theme } = useTheme(); // Get current theme from context

  if (!product || !product.id) {
    return <div className="error-message">Invalid product data</div>;
  }

  // Set background color based on the product category or isAllProducts
  const backgroundColor = isAllProducts ? '#ffffff' : getCategoryColor(product.category);

  // Define border style based on the theme
  const borderStyle = theme === 'dark' ? '2px solid yellow' : '1px solid #ccc'; // Yellow in dark theme, gray in light theme

  return (
    <div 
      className="product-card" 
      style={{ backgroundColor, border: borderStyle }} // Apply the border style
    >
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.price}</p>
      <Link to={`/product/${product.id}`} className="product-detail-link">View Details</Link>
    </div>
  );
}

// Function to get different colors for categories
function getCategoryColor(category) {
  switch (category) {
    case "electronics":
      return "#E0F7FA";  // Light blue
    case "men's clothing":
      return "#F1F8E9";  // Light green
    case "women's clothing":
      return "#FCE4EC";  // Light pink
    case "jewelery":
      return "#FFF3E0";  // Light orange
    default:
      return "#ffffff";  // Default white for other categories
  }
}

export default ProductCard;
