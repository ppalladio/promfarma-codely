import React from 'react';
const axios = require('axios');
const fs = require('fs');

async function searchProducts() {
// async function CategoryDictionary(): Promise<any> {  
  const apiUrl = 'https://graphql.stg.promofarma.com/graphql';

  try {
    const response = await axios.post(apiUrl, {
      query: `
        query SearchProducts {
          response: searchProducts(            
            productHasStock: true
            productState: "enabled"
            # size: 4
          ) {
            products {
              product_id
              name
              manufacturer {
                manufacturer_id
                manufacturer_name
              }
              brand {
                brand_id, name
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
      variables: {}
    })

    const responseData = response.data.data.response;

    const products = responseData.products;

	const mainCategoryDict = {};

	products.forEach((item) => {{
		const mainCategory = item.main_category;
		mainCategoryDict[mainCategory.category_id] = mainCategory.category_name;
	}});

  CategoryDictionary = Object.values(mainCategoryDict).map(value => ({ name: value }));

	// fs.writeFileSync('response.ts', JSON.stringify(category2));
    // console.log('Response saved to response.ts');
  // console.log(category2);
  return category2
  } catch (error) {
    console.error('Error:', error);
  }
}

const CategoryDictionary = searchProducts;

export default CategoryDictionary;


