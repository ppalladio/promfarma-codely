// import React from 'react';

const axios = require('axios');
// import fs from 'fs';
const fs = require('fs');

// Category Dictionary & Array
const categoryDict = {};
const categoryArray = [];

// Brands Dictionary & Array
const brandsDict = {};
const brandsArray = [];

// Manfacturer Dictionary & Array
const manufacturerDict = {};
const manufacturerArray = [];

// Product Dictionary & Array
// const productDict = {};
const productArray = [];

async function searchProducts(categoryDict) {
  const apiUrl = 'https://graphql.stg.promofarma.com/graphql';
  const pageSize = 14; // Number of products to fetch per request
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

	allProducts.forEach((item) => {

    // Setup Category Dictionary & Array
	const mainCategory = item.main_category;
	const category_idz = mainCategory.category_id;
	const category_namez = mainCategory.category_name; 
    categoryDict[category_idz] = category_namez;
    categoryArray.push(category_namez);

    // Setup Brands Dictionary & Array
	const brandsList = item.brand;
	const brand_idz = brandsList.brand_id;
	const namez = brandsList.name; 
    brandsDict[brand_idz] = namez;
    brandsArray.push(namez);

    // Setup Manufacturer Dictionary & Array
	const manufacturerList = item.manufacturer;
	const manufacturer_idz = manufacturerList.manufacturer_id;
	const manufacturer_namez = manufacturerList.manufacturer_name; 
    manufacturerDict[manufacturer_idz] = manufacturer_namez;
    manufacturerArray.push(manufacturer_namez);
  
    // Setup Products products
    const productList = item;
    const productId = productList.product_id;
    const productName = productList.name;
    const productUpdated = productList.updated_at;
    const productState = productList.product_state;
    const productHasStock = productList.has_stock;
    // const productRecomendedPriceES = productList.recommended_prices[0]
    // productDict['product_id'] = productId;
    // productDict[name] = productName;
	// productArray.push({`1`: productId})
	
	var obj = {};
	obj.product_idz = productId;
	obj.updated_at = productUpdated;
	obj.productName = productName;
	obj.productState = productState;
	obj.productHasStock = productHasStock;
  obj.productBrandId = brand_idz;
  obj.productBrandName = namez;
  obj.manufacturerId = manufacturer_idz;
  obj.manufacturerName = manufacturer_namez;
  obj.categoryId = category_idz;
  obj.categoryName = category_namez;
	productArray.push(obj);
	// Id={product.brand.brand_id}
	});

  } catch (error) {
    console.error('Error:', error);
  } 

// console.log('Response:\n', categoryDict);
// console.log('Response saved to response.ts', categoryArray) ;
// console.log('Response saved to response.ts', brandsDict);
// console.log('Response saved to response.ts', brandsArray);
// console.log('Response saved to response.ts', manufacturerDict);
// console.log('Response saved to response.ts', manufacturerArray);
// console.log('Response saved to response.ts', productDict);

  const fz = require('fs');


  // Create category.ts
  const fileContent = `interface propsCodeName<String> {
    [key: string]: string;
  }

  export const category: propsCodeName<String> = ${JSON.stringify(categoryDict, null, 4)};

  `;

  fs.writeFile('category.ts', fileContent, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File saved successfully: category.ts');
    }
  });
  
  // Create brands.ts
  const fileContent2 = `interface propsCodeName<String> {
    [key: string]: string;
  }

  export const brandName: propsCodeName<String> = ${JSON.stringify(brandsDict, null, 4)};

  `;

  fs.writeFile('brands.ts', fileContent2, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File saved successfully: brands.ts');
    }
  });
  
  // Create products.ts
//   const fileContent3 = `export const products = ${JSON.stringify(productArray, null, 4)};

//   `;

	// { product_idz: "${item.product_idz}" },`).join('\n')}
	// 	];
	// 	`;
  
  const fileContent3 = `export const products = [
	${productArray.map((item) => `
	{
		product_id: "${item.product_idz}",
		updated_at: "${item.productUpdated}",
		name: "${item.productName}",
		product_state: "${item.productState}",
		has_stock: "${item.productHasStock}",
		brand: {
			brad_id: "${item.productBrandId}",
			brad_name: "${item.productBrandName}",
		},
		manufacturer: {
			manufacturer_id: "${item.manufacturerId}",
			manufacturer_name: "${item.manufacturerName}",
		},
		main_category: {
			category_id: "${item.categoryId}",
			category_name: "${item.categoryName}",
		},
	}`)},
	];
	`;
	
  fs.writeFile('products.ts', fileContent3, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File saved successfully: products.ts');
    }
  });
  
  // console.log('Response saved to response.ts', productArray);

  return (productArray);
}

// Call the function to search for products
searchProducts(categoryDict);

// export default CategoryDictionary;

// export const algo : any =  searchProducts(categoryDict);