import React, {useContext} from 'react';
import { ThemeContext } from '../Context/ThemeContext'; 
import '../App.css';

function Search({ searchTerm, onSearchChange }) {
  const { theme } = useContext(ThemeContext); 
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search for products..."
        className={`search-bar ${theme}`} // Apply the theme class
      />
    </div>
  );
}

export default Search;
