"use client"

import React, { useState } from 'react';
import './Sidebar.css';

interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 1, name: 'Categoria' },
  { id: 2, name: 'Categoria' },
  { id: 3, name: 'Categoria' },
  { id: 4, name: 'Categoria' },
  { id: 5, name: 'Categoria' },
  { id: 6, name: 'Categoria' },
];

const Sidebar: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleCategoryToggle = (categoryId: number) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryToggle(category.id)}
              />
              {category.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
