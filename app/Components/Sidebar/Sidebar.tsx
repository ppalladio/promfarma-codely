import React, { useState } from 'react';
import { category, brandName } from '../Constants/info.ts';
import Image from 'next/image';

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
    const [categoryOrder, setCategoryOrder] = useState('asc');
    const [brandOrder, setBrandOrder] = useState('asc');

    const handleCategoryToggle = (categoryId: string) => {
        onCategoryToggle(categoryId);
    };

    const handleBrandToggle = (brandId: string) => {
        onBrandToggle(brandId);
    };

    const toggleCategoryOrder = () => {
        setCategoryOrder(categoryOrder === 'asc' ? 'desc' : 'asc');
    };

    const toggleBrandOrder = () => {
        setBrandOrder(brandOrder === 'asc' ? 'desc' : 'asc');
    };

    const getOrderedCategories = () => {
        const orderedCategories = Object.entries(category).sort((a, b) => {
            if (categoryOrder === 'asc') {
                return a[1].localeCompare(b[1]);
            } else {
                return b[1].localeCompare(a[1]);
            }
        });

        return orderedCategories;
    };

    const getOrderedBrands = () => {
        const orderedBrands = Object.entries(brandName).sort((a, b) => {
            if (brandOrder === 'asc') {
                return a[1].localeCompare(b[1]);
            } else {
                return b[1].localeCompare(a[1]);
            }
        });
        return orderedBrands;
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-col leading-[20px] h-1/2 overflow-y-auto mb-[80px]">
                <h2 className="sticky top-0 bg-white py-2 px-4 flex justify-between items-center">
                    Categories
                    <button
                        className="ml-2 text-blue-500 flex items-center"
                        onClick={toggleCategoryOrder}
                    >
                        <Image
                            width={20}
                            height={20}
                            src="https://www.svgrepo.com/show/357034/alphabetical-sorting.svg"
                            alt="Alphabetical Sorting"
                        />
                    </button>
                </h2>
                <ul>
                    {getOrderedCategories().map(
                        ([categoryId, categoryName]) => (
                            <li key={categoryId}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(
                                            categoryId,
                                        )}
                                        onChange={() =>
                                            handleCategoryToggle(categoryId)
                                        }
										className='mr-2'
                                    />
                                    {categoryName}
                                </label>
                            </li>
                        ),
                    )}
                </ul>
            </div>

            <div className="flex flex-col leading-[20px] h-1/2 overflow-y-auto">
                <h2 className="sticky top-0 bg-white py-2 px-4 flex justify-between items-center">
                    Brands
                    <button
                        className="ml-2 text-blue-500 flex items-center"
                        onClick={toggleBrandOrder}
                    >
                        <Image
                            width={20}
                            height={20}
                            src="https://www.svgrepo.com/show/357034/alphabetical-sorting.svg"
                            alt="Alphabetical Sorting"
                        />
                    </button>
                </h2>
                <ul>
                    {getOrderedBrands().map(([brandId, brand]) => (
                        <li key={brandId}>
                            <label>
                                <input className='mr-2'
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
        </div>
    );
};

export default Sidebar;
