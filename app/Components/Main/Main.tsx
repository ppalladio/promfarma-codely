'use client';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ToggledTags from '../Sidebar/ToggleTags';
import ProductList from '../ProductList/ProductList';
import { category, brandName } from '../Constants/info';

const Main = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    const handleCategoryToggle = (categoryId: string) => {
        const newSelectedCategories = [...selectedCategories];
        const categoryIndex = newSelectedCategories.indexOf(categoryId);

        if (categoryIndex !== -1) {
            newSelectedCategories.splice(categoryIndex, 1);
        } else {
            newSelectedCategories.push(categoryId);
        }

        setSelectedCategories(newSelectedCategories);
    };

    const handleBrandToggle = (brandId: string) => {
        const newSelectedBrands = [...selectedBrands];
        const brandIndex = newSelectedBrands.indexOf(brandId);

        if (brandIndex !== -1) {
            newSelectedBrands.splice(brandIndex, 1);
        } else {
            newSelectedBrands.push(brandId);
        }

        setSelectedBrands(newSelectedBrands);
    };

    return (
        <section className="flex flex-row lg:px-6 mb-6">
            <Sidebar
                selectedCategories={selectedCategories}
                selectedBrands={selectedBrands}
                onCategoryToggle={handleCategoryToggle}
                onBrandToggle={handleBrandToggle}
            />
            <div className="flex flex-col mx-3">
                <ToggledTags
                    selectedCategories={selectedCategories}
                    selectedBrands={selectedBrands}
                    categoryNames={category}
                    brandNames={brandName}
                    onCategoryToggle={handleCategoryToggle}
                    onBrandToggle={handleBrandToggle}
                />
                <div className="product-list h-full overflow-y-auto">
                    <ProductList
                        selectedCategories={selectedCategories}
                        selectedBrands={selectedBrands}
                    />
                </div>
            </div>
        </section>
    );
};

export default Main;
