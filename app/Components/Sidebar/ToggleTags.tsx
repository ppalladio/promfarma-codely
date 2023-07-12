import React from 'react';
import { ImCancelCircle } from 'react-icons/im';

interface ToggledTagsProps {
    selectedCategories: string[];
    selectedBrands: string[];
    categoryNames: Record<string, string>;
    brandNames: Record<string, string>;
    onCategoryToggle: (categoryId: string) => void;
    onBrandToggle: (brandId: string) => void;
}

const ToggledTags: React.FC<ToggledTagsProps> = ({
    selectedCategories,
    selectedBrands,
    categoryNames,
    brandNames,
    onCategoryToggle,
    onBrandToggle,
}) => {
    const handleCategoryToggle = (categoryId: string) => {
        onCategoryToggle(categoryId);
    };

    const handleBrandToggle = (brandId: string) => {
        onBrandToggle(brandId);
    };

    const renderCategoryTags = () => {
        return selectedCategories.map((categoryId) => (
            <div key={categoryId} className="inline-block max-w-full truncate">
                <div className="flex flex-row items-center rounded-2xl bg-accent_green px-3 py-1 mx-1">
                    {categoryNames[categoryId]}
                    <span
                        className="close "
                        onClick={() => handleCategoryToggle(categoryId)}
                    >
                        <ImCancelCircle
                            className="ml-1 hover:cursor-pointer"
                            size={20}
                        />
                    </span>
                </div>
            </div>
        ));
    };

    const renderBrandTags = () => {
        return selectedBrands.map((brandId) => (
            <div key={brandId} className="inline-block max-w-full truncate">
                <div className="flex flex-row rounded-2xl bg-accent_green px-3 py-1">
                    {brandNames[brandId]}
                    <span
                        className="close"
                        onClick={() => handleBrandToggle(brandId)}
                    >
                        <ImCancelCircle
                            className="ml-1 hover:cursor-pointer"
                            size={20}
                        />
                    </span>
                </div>
            </div>
        ));
    };

    return (
        <div className="toggled-tags">
            <div className="flex flex-row items-center">
                <h4>Selected Categories:</h4>
				<div className='ml-2'>

                {renderCategoryTags()}
				</div>
            </div>
			<div className="flex flex-row items-center mt-3">
				
                <h4>Selected Brands:</h4>
                <div className='ml-2'>

				{renderBrandTags()}
				</div>

            </div>
        </div>
    );
};

export default ToggledTags;
