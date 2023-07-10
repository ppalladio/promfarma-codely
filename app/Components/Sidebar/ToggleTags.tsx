import React from 'react';

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
  onBrandToggle
}) => {
  const handleCategoryToggle = (categoryId: string) => {
    onCategoryToggle(categoryId);
  };

  const handleBrandToggle = (brandId: string) => {
    onBrandToggle(brandId);
  };

  const renderCategoryTags = () => {
    return selectedCategories.map((categoryId) => (
      <div key={categoryId} className="tag">
        {categoryNames[categoryId]}
        <span
          className="close"
          onClick={() => handleCategoryToggle(categoryId)}
        >
          x
        </span>
      </div>
    ));
  };

  const renderBrandTags = () => {
    return selectedBrands.map((brandId) => (
      <div key={brandId} className="tag">
        {brandNames[brandId]}
        <span
          className="close"
          onClick={() => handleBrandToggle(brandId)}
        >
          x
        </span>
      </div>
    ));
  };

  return (
    <div className="toggled-tags">
      <div className="tag-group">
        <h4>Selected Categories:</h4>
        {renderCategoryTags()}
      </div>
      <div className="tag-group">
        <h4>Selected Brands:</h4>
        {renderBrandTags()}
      </div>
    </div>
  );
};

export default ToggledTags;
