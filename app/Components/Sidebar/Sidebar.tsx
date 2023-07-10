import React from 'react';
import { category, brandName } from '../Constants/info.ts';

interface SidebarProps {
  selectedCategories: string[];
  selectedBrands: string[];
  onCategoryToggle: (categoryId: string) => void;
  onBrandToggle: (brandId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategories,
  selectedBrands,
  onCategoryToggle,
  onBrandToggle,
}) => {
  const handleCategoryToggle = (categoryId: string) => {
    onCategoryToggle(categoryId);
  };

  const handleBrandToggle = (brandId: string) => {
    onBrandToggle(brandId);
  };

  return (
    <div className="flex flex-col leading-[20px]">
      <h2>Categories</h2>
      <ul>
        {Object.entries(category).map(([categoryId, categoryName]) => (
          <li key={categoryId}>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes(categoryId)}
                onChange={() => handleCategoryToggle(categoryId)}
              />
              {categoryName}
            </label>
          </li>
        ))}
      </ul>

      <h2>Brands</h2>
      <ul>
        {Object.entries(brandName).map(([brandId, brand]) => (
          <li key={brandId}>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brandId)}
                onChange={() => handleBrandToggle(brandId)}
              />
              {brand}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
