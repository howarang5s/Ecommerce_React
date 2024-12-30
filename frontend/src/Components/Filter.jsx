// src/components/Filter.js
import React from 'react';

function Filter({ categories, onFilter }) {
  return (
    <div className="filter-container">
      <h3>Filter by Category</h3>
      <select onChange={(e) => onFilter(e.target.value)} defaultValue="">
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
