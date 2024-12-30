// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ProductCard from './ProductCard';
// import axios from 'axios';
// import '../App.css'; // Import the CSS for better UI

// const LoadingSpinner = () => (
//   <div className="loading-container">
//     <div className="spinner"></div>
//   </div>
// );

// function ProductList({ searchTerm }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Get selectedCategories array from Redux
//   const selectedCategories = useSelector(state => state.filter.selectedCategories);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         if (response.status !== 200) {
//           throw new Error('Failed to fetch products');
//         }
//         setProducts(response.data);
//       } catch (err) {
//         setError(err.message || 'Failed to fetch products. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Filter products based on the selected categories array
//   const filteredProducts = selectedCategories.length === 0
//     ? products // If no category is selected, show all products
//     : products.filter(product => selectedCategories.includes(product.category));

//   // Further filter products based on the search term
//   const searchedProducts = filteredProducts.filter(product =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) return <LoadingSpinner />; // Show spinner while loading

//   if (error) return <div className="error-message">{error}</div>;

//   return (
//     <div className="product-list-container">
//       <div className="product-grid">
//         {searchedProducts.length > 0 ? (
//           searchedProducts.map(product => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               isAllProducts={selectedCategories.length === 0}
//               theme={document.body.classList.contains('dark') ? 'dark' : 'light'} // Pass the theme
//             />
//           ))
//         ) : (
//           // Show error message when no products are found
//           <div className="error-message">
//             <p>No products found. Please try a different search or filter.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductList;


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import { fetchProducts } from '../Redux/actions/productAction'; // Import your fetchProducts action
import '../App.css'; // Import the CSS for better UI

const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="spinner"></div>
  </div>
);

function ProductList({ searchTerm }) {
  const dispatch = useDispatch();

  // Get products, loading, and error from Redux
  const { products, loading, error } = useSelector(state => ({
    products: state.product.products,
    loading: state.product.loading,
    error: state.product.error,
  }));

  // Get selectedCategories array from Redux
  const selectedCategories = useSelector(state => state.filter.selectedCategories);

  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products based on the selected categories array
  const filteredProducts = selectedCategories.length === 0
    ? products // If no category is selected, show all products
    : products.filter(product => selectedCategories.includes(product.category));

  // Further filter products based on the search term
  const searchedProducts = filteredProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show spinner while loading
  if (loading) return <LoadingSpinner />;

  // Show error message if there's an error
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="product-list-container">
      <div className="product-grid">
        {searchedProducts.length > 0 ? (
          searchedProducts.map(product => (
            <ProductCard
              key={product._id} // Use _id since it's coming from MongoDB
              product={product}
              isAllProducts={selectedCategories.length === 0}
              theme={document.body.classList.contains('dark') ? 'dark' : 'light'} // Pass the theme
            />
          ))
        ) : (
          // Show error message when no products are found
          <div className="error-message">
            <p>No products found. Please try a different search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
