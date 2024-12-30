import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductList from './Components/ProductList';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import Header from './Components/Header';
import NotFound from './Pages/NotFound';
import CartComp from './Components/Cart'; // Ensure this is needed
import { setFilter } from './Redux/actions/filterAction';
import { fetchProducts } from './Redux/actions/productAction'; // Import the action to fetch products
import './App.css';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  // Fetch products when the app mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategorySelect = (category) => {
    dispatch(setFilter(category));
  };

  return (
    <Router>
      <Header onSearchChange={setSearchTerm} onCategorySelect={handleCategorySelect} />
      
      <Routes>
        <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cartcomp" element={<CartComp />} /> {/* Corrected prop from component to element */}
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
    </Router>
  );
}

export default App;
