import React from 'react';
import useProductList from '../Api/fetchProductData';

const ProductList = () => {
  const apiUrl = 'https://graphql.stg.promofarma.com/graphql';
  const pageSize = 14;

  const products = useProductList(apiUrl, pageSize);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div>
          <h2><b>Product Name:</b> {product.name}</h2>
          <h2><b>Product ID:</b> {product.product_id}</h2>
          <h2><b>Product updated_at:</b> {product.updated_at}</h2>
          <h2><b>Product Has Stock:</b> {product.has_stock}</h2>
          <h3><b>Product Brand:</b> {product.brand.name}</h3>
          <h3><b>Product Brand ID:</b> {product.brand.brand_id}</h3>
          <h3><b>Product State:</b> {product.product_state}</h3>
          <h3><b>Product Categories:</b></h3>
            <ul>
              {Object.entries(product.manufacturer).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}: </strong>
                  {value}
                </li>
              ))}
            </ul>
          Main Category:
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
          Recommended Prices:
          <ul>
            {product.recommended_prices.map((price, index) => (
              <li key={index}>
                <strong>Amount: </strong>
                {price.amount}
                <br />
                <strong>Currency: </strong>
                {price.currency}
                <br />
                <strong>Country: </strong>
                {price.country}
              </li>
            ))}
          </ul>
          <br />
          {/* <h3><b>Product Category:</b> {product.category.name}</h3> */}
          {/* <h3><b>Product Category:</b> {product.main_category.category_name}</h3> */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
