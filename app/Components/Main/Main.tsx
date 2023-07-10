'use client'
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ProductList from '../ProductList/ProductList';

const Main = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleBrandToggle = (brandId: string) => {
    if (selectedBrands.includes(brandId)) {
      setSelectedBrands(selectedBrands.filter((id) => id !== brandId));
    } else {
      setSelectedBrands([...selectedBrands, brandId]);
    }
  };

  return (
    <section className="flex flex-row">
      <Sidebar
        selectedCategories={selectedCategories}
        selectedBrands={selectedBrands}
        onCategoryToggle={handleCategoryToggle}
        onBrandToggle={handleBrandToggle}
      />
      <ProductList
        selectedCategories={selectedCategories}
        selectedBrands={selectedBrands}
      />
    </section>
  );
};

export default Main;
