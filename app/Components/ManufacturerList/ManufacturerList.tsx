import React from 'react';
import useProductList from '../Api/fetchManufacturerData';

const ManufacturerList = () => {
  const apiUrl = 'https://graphql.stg.promofarma.com/graphql';
  const pageSize = 14;

  const products = useProductList(apiUrl, pageSize);

  return (
    <div>
      <h1>Manufacturer Brand</h1>
      {products.map((product) => (
        <div key={product.name}>
          {product.manufacturer ? (
            <ul>
              {Object.entries(product.manufacturer).map(([key, value]) => (
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

export default ManufacturerList;
