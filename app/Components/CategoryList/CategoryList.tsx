import React from 'react';
import useProductList from '../Api/fetchCategoryData';

const CategoryList = () => {
  const apiUrl = 'https://graphql.stg.promofarma.com/graphql';
  const pageSize = 14;

  const products = useProductList(apiUrl, pageSize);

  return (
    <div>
      <h1>Product Category</h1>
      {products.map((product) => (
        <div key={product.name}>
          {product.main_category ? (
            <ul>
              {Object.entries(product.main_category).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}: </strong>
                  {value}
                </li>
              ))}
            </ul>
          ) : (
            <p>No main category available.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
