import { useState } from 'react';
import axios from 'axios'; 


async function searchProducts() {
  const apiUrl = 'https://graphql.stg.promofarma.com/graphql';
  const pageSize = 14;
  let totalProducts = 0;
  let allProducts = [];

  try {
    let page = 1;
    let hasMoreProducts = true;

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

      totalProducts = responseData.metadata.totalProducts;

      const remainingProducts = totalProducts - allProducts.length;
      hasMoreProducts = remainingProducts > 0;

      page++;
    }

    const categoryArray = [];
    allProducts.forEach((item) => {
      const mainCategory = item.main_category;
      const category_idz = mainCategory.category_id;
      const category_namez = mainCategory.category_name;
      categoryArray.push(category_namez);
    });

	console.log(categoryArray);
    return categoryArray;
	
  } catch (error) {
    console.error('Error:', error);
  }
}
// searchProducts(productArray);

// searchProducts;
export { searchProducts };
