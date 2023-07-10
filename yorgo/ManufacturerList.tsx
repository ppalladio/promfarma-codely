'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = 'https://graphql.stg.promofarma.com/graphql';
  const pageSize = 14;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let page = 1;
        let hasMoreProducts = true;
        let allProducts = [];

        while (hasMoreProducts) {
          const response = await axios.post(apiUrl, {
            query: `
              query SearchProducts($size: Int, $page: Int) {
                response: searchProducts(
                  productHasStock: true
                  productState: "enabled"
                  size: $size
                  page: $page
                ) {
                  products {
                    manufacturer {
                        manufacturer_id
                            manufacturer_name
                    }
                  }
                  metadata {
                    totalProducts
                  }
                }
              }
            `,
            variables: {
              size: pageSize,
              page: page
            }
          });

          const responseData = response.data.data.response;
          const products = responseData.products;
          allProducts = allProducts.concat(products);

          const remainingProducts = responseData.metadata.totalProducts - allProducts.length;
          hasMoreProducts = remainingProducts > 0;

          page++;
        }

        setProducts(allProducts);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Manufacturer List</h1>
      {products.map((product) => (
        <div>
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
            <p>No manufacturer available.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;




