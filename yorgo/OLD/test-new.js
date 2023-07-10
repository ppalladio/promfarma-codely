// 'use client'
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
  console.error('Error:', error);
  
//   return (
//     <div>
//       <h1>Product List</h1>
//       {products.map((product) => (
//         <div>
//           <h2><b>Product Name:</b> {product.name}</h2>
//           <h2><b>Product ID:</b> {product.product_id}</h2>
//           <h2><b>Product updated_at:</b> {product.updated_at}</h2>
//           <h2><b>Product Has Stock:</b> {product.has_stock}</h2>
//           <h3><b>Product Brand:</b> {product.brand.name}</h3>
//           <h3><b>Product Brand ID:</b> {product.brand.brand_id}</h3>
//           <h3><b>Product State:</b> {product.product_state}</h3>
//           <h3><b>Product Manufacturer:</b> {product.manufacturer.manufacturer_name}</h3>
//           <h3><b>Product Manufacturer ID:</b> {product.manufacturer.manufacturer_id}</h3>
//           <h3><b>Product Recommended Prices Amount:</b> {product.recommended_prices.amount}</h3>
//           <h3><b>Product Recommended Prices Currency:</b> {product.recommended_prices.currency}</h3>
//           <h3><b>Product Recommended Prices Country:</b> {product.recommended_prices.country}</h3>
//           <br />
//           {/* <h3><b>Product Category:</b> {product.category.name}</h3> */}
//           {/* <h3><b>Product Category:</b> {product.main_category.category_name}</h3> */}
//         </div>
//       ))}
//     </div>
//   );
};

CategoryList


// export default CategoryList;
