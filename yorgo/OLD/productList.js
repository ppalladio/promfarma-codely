'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
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
                    product_id
                    updated_at
                    name
                    product_state
                    has_stock
                    recommended_prices {
                      amount
                      currency
                      country
                    }
                    manufacturer {
                      manufacturer_id
                      manufacturer_name
                    }
                    brand {
                      brand_id
                      name
                    }
                    main_category {
                      category_id
                      category_name
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
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.product_id}>
          <h2>{product.name}</h2>
          {/* Render other product details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
