import React from 'react';
import useProductList from '../Api/fetchBrandData';

const BrandList = () => {
  const apiUrl = 'https://graphql.stg.promofarma.com/graphql';
  const pageSize = 14;

  const products = useProductList(apiUrl, pageSize);

  return (
    <div>
      <h1>Product Brand</h1>
      {products.map((product) => (
        <div key={product.name}>
          {product.brand ? (
            <ul>
              {Object.entries(product.brand).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}: </strong>
                  {value}
                </li>
              ))}
            </ul>
          ) : (
            <p>No brands available.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default BrandList;
