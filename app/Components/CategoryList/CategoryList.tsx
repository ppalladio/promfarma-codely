import Card from '@/app/Card';
import React from 'react';
import { products } from '../Constants/products';
import { category, manufacturerName, brandName } from '../Constants/info.ts';

const axios = require('axios');
const fs = require('fs');

async function searchProducts() {
  const apiUrl = 'https://graphql.stg.promofarma.com/graphql';
  const pageSize = 14; // Number of products to fetch per request
  let totalProducts = 0;
  let allProducts = [];
  const responseData = null

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

      // Add the fetched products to the list
      allProducts = allProducts.concat(products);

      // Update the totalProducts count
      totalProducts = responseData.metadata.totalProducts;

      // Determine if there are more products to fetch
      const remainingProducts = totalProducts - allProducts.length;
      hasMoreProducts = remainingProducts > 0;

      // Increment the page number for the next request
      page++;
    }

 	const mainCategoryDict = {};

	allProducts.forEach((item) => {

		const mainCategory = item.manufacturer;

		const idz = mainCategory.manufacturer_id;
		const namez = mainCategory.manufacturer_name; 
 		mainCategoryDict[idz] = namez;
		console.log(mainCategoryDict);


	});

// 	console.log(mainCategoryDict);
//     console.log('Total products:', totalProducts);
//     console.log('All products:', allProducts);

  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to search for products
searchProducts();

interface Price {
    amount?: number;
    currency?: string;
    country?: string;
}
const CategoryList = () => {
    return (
        <div>

            {responseData}
            {/* {products.map((product) => {
                const price = product.recommended_prices.find(
                    (price) => price.country === 'ES',
                ); //@in case price ES does not exist

                return (
                    <div key={product.product_id}>
                        <Card
                            id={product.product_id}
                            name={product?.name ?? ''}
                            country={price?.country}
                            price={price?.amount}
                            state={product.product_state}
                            brandId={product.brand.brand_id}
                            brandName={brandName[product.brand.brand_id]}
                            manufacturerId={
                                manufacturerName[
                                    product.manufacturer.manufacturer_id
                                ]
                            }
                            manufacturerName={
                                product.manufacturer.manufacturer_name
                            }
                            favorite={false} // Set your favorite logic here
                            favoriteImg={''} // Set the favorite image URL if needed
                            productIndex={''} // Set the product index if needed
                            // category={
                            //     category[product.main_category!.category_id]
                            // } //! category can be null
                            hasStock={product.has_stock}
                          
                        />
                    </div>
                );
            })} */}
        </div>
    );
};

export default CategoryList;
