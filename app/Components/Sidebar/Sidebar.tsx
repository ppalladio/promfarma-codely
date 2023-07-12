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
    const [showMenu, setShowMenu] = useState(false);

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

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div
            className={`fixed inset-y-0 right-0  bg-gray-50 z-10 overflow-y-auto lg:static lg:h-screen lg:w-1/6 lg:overflow-y-visible whitespace-nowrap ${
                showMenu ? 'w-1/2' : 'w-0'
            } transition-all duration-300`}
        >
            <div className="flex flex-col h-screen whitespace-nowrap mt-[80px] ">
                <div className="flex flex-col leading-[20px] h-1/2 overflow-y-auto mb-[80px] border-[1px] border-slate-950">
                    <h2 className="sticky top-0 bg-dark_gray py-2 px-4 flex flex-row justify-between items-center ">
                        Category
                        <button onClick={toggleCategoryOrder}>
                            <Image
                                width={20}
                                height={20}
                                src="https://www.svgrepo.com/show/357034/alphabetical-sorting.svg"
                                alt="Alphabetical Sorting"
                            />
                        </button>
                    </h2>
                    <ul className="px-2">
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
                                            className="mr-2"
                                        />
                                        {categoryName}
                                    </label>
                                </li>
                            ),
                        )}
                    </ul>
                </div>

                <div className="flex flex-col leading-[20px] h-1/2 overflow-y-auto border-[1px] border-slate-950">
                    <h2 className="sticky top-0 bg-dark_gray py-2 px-4 flex flex-row justify-between items-center ">
                        Brands
                        <button onClick={toggleBrandOrder}>
                            <Image
                                width={20}
                                height={20}
                                src="https://www.svgrepo.com/show/357034/alphabetical-sorting.svg"
                                alt="Alphabetical Sorting"
                            />
                        </button>
                    </h2>
                    <ul className="px-2">
                        {getOrderedBrands().map(([brandId, brand]) => (
                            <li key={brandId}>
                                <label>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        checked={selectedBrands.includes(
                                            brandId,
                                        )}
                                        onChange={() =>
                                            handleBrandToggle(brandId)
                                        }
                                    />
                                    {brand}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="lg:hidden">
                <button
                    className="bg-accent_green text-white py-2 px-4 fixed right-4 bottom-4 rounded-md shadow-md"
                    onClick={toggleMenu}
                >
                    {showMenu ? 'Hide Filter' : 'Show Filter'}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
