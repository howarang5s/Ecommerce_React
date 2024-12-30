import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartModal from './Cart';
import SearchBar from './Search';
import { setFilter,resetFilter } from '../Redux/actions/filterAction'; // Ensure this action is defined
import { FaShoppingCart, FaBox, FaLaptop, FaGem, FaFemale, FaMale, FaSun, FaMoon } from 'react-icons/fa'; // Import theme icons
import { ThemeContext } from '../Context/ThemeContext'; // Import ThemeContext
import '../App.css'; // Ensure the CSS file is imported

function Header({ onSearchChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [headerError, setHeaderError] = useState(null); // State for header errors
  const cart = useSelector(state => state.cart.items); // Get cart items from Redux state
  const selectedCategories = useSelector(state => state.filter.selectedCategories); // Get selected categories
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  // Access theme context
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Toggle cart modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle category filtering
  const handleCategoryFilter = (category) => {
    try {
      dispatch(setFilter(category)); // Dispatch the filter action
      setHeaderError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error setting filter:', error);
      setHeaderError('Failed to apply category filter. Please try again.');
    }
  };

  // Handle search term changes
  const handleSearchChange = (term) => {
    try {
      setSearchTerm(term);
      onSearchChange(term); // Notify parent about the search term change
      setHeaderError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error updating search term:', error);
      setHeaderError('Failed to update search. Please try again.');
    }
  };

  // Check if a category is active
  const isCategoryActive = (category) => selectedCategories.includes(category);

  return (
    <header className={`header-container ${theme}`}>
      <h1 className='header-title' onClick={() => dispatch(resetFilter(''))} style={{ cursor: 'pointer' }}>
        E-commerce Store
      </h1>

      {/* Display Header Error Message */}
      {headerError && <div className="error-message">{headerError}</div>}

      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {/* Category Icons with Tooltips */}
      <div className="header-icons">
        {/* <div 
          onClick={() => handleCategoryFilter('')} 
          className={`category-icon ${selectedCategories.length === 0 ? 'active-category' : ''}`} 
          title="All Products"
        >
          <FaBox />
          {selectedCategories.length === 0 && <div className="active-line"></div>} {/* Line for active category */}
        {/* </div> */} 
        <div 
          onClick={() => handleCategoryFilter('electronics')} 
          className={`category-icon ${isCategoryActive('electronics') ? 'active-category' : ''}`} 
          title="Electronics"
        >
          <FaLaptop />
          {isCategoryActive('electronics') && <div className="active-line"></div>} {/* Line for active category */}
        </div>
        <div 
          onClick={() => handleCategoryFilter("men's clothing")} 
          className={`category-icon ${isCategoryActive("men's clothing") ? 'active-category' : ''}`} 
          title="Men's Clothing"
        >
          <FaMale />
          {isCategoryActive("men's clothing") && <div className="active-line"></div>} {/* Line for active category */}
        </div>
        <div 
          onClick={() => handleCategoryFilter("women's clothing")} 
          className={`category-icon ${isCategoryActive("women's clothing") ? 'active-category' : ''}`} 
          title="Women's Clothing"
        >
          <FaFemale />
          {isCategoryActive("women's clothing") && <div className="active-line"></div>} {/* Line for active category */}
        </div>
        <div 
          onClick={() => handleCategoryFilter('jewelery')} 
          className={`category-icon ${isCategoryActive('jewelery') ? 'active-category' : ''}`} 
          title="Jewelry"
        >
          <FaGem />
          {isCategoryActive('jewelery') && <div className="active-line"></div>} {/* Line for active category */}
        </div>

        {/* Theme Toggle Button with consistent size */}
        <div className="theme-toggle" title="Toggle Theme" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </div>
      </div>

      {/* Cart Icon with Tooltip */}
      <div className="cart-icon" onClick={toggleModal} title="Your Cart">
        <FaShoppingCart /> {/* Cart Icon */}
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </div>

      {/* Cart Modal */}
      <CartModal isOpen={isModalOpen} onClose={toggleModal} cart={cart} />
    </header>
  );
}

export default Header;
