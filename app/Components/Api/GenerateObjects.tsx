import React from 'react';
const axios = require('axios');
const test = 1;

// Category Dictionary & Array
const categoryDict = {};
// const categoryArray = [];

// Brands Dictionary & Array
// const brandsDict = {};
// const brandsArray = [];

// Manfacturer Dictionary & Array
// const manufacturerDict = {};
// const manufacturerArray = [];

// Product Dictionary & Array
// const productDict = {};
const productArray: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | {}[] | null | undefined = [];

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
		// const mainCategory = item.main_category;
		// const category_idz = mainCategory.category_id;
		// const category_namez = mainCategory.category_name; 
		// categoryDict[category_idz] = category_namez;
		// categoryArray.push(category_namez);

		// Setup Brands Dictionary & Array
		// const brandsList = item.brand;
		// const brand_idz = brandsList.brand_id;
		// const namez = brandsList.name; 
		// brandsDict[brand_idz] = namez;
		// brandsArray.push(namez);

		// Setup Manufacturer Dictionary & Array
		// const manufacturerList = item.manufacturer;
		// const manufacturer_idz = manufacturerList.manufacturer_id;
		// const manufacturer_namez = manufacturerList.manufacturer_name; 
		// manufacturerDict[manufacturer_idz] = manufacturer_namez;
		// manufacturerArray.push(manufacturer_namez);
	
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
		productArray.push(obj);
	
	});

  } catch (error) {
    console.error('Error:', error);
  }
//   console.log('Response saved to response.ts', productArray);
//   console.log(productArray);
  
  return (productArray);

// console.log('Response:\n', categoryDict);
// console.log('Response saved to response.ts', categoryArray) ;
// console.log('Response saved to response.ts', brandsDict);
// console.log('Response saved to response.ts', brandsArray);
// console.log('Response saved to response.ts', manufacturerDict);
// console.log('Response saved to response.ts', manufacturerArray);
// console.log('Response saved to response.ts', productDict);
// console.log('Response saved to response.ts', productArray);
//   const fz = require('fs');

}

// Call the function to search for products

const testArray = searchProducts(categoryDict);

// const testArray = searchProducts(categoryDict);
// console.log(CategoryDictionary);
const CategoryDictionary = () => {
	// Check if testArray is an array
	if (!Array.isArray(testArray)) {
	  return <div>Error: testArray is not an array</div>;
	}

	return (
	  <div>
		<h2>Test:</h2>
		{testArray.map((product, index) => (
		  <div key={index}>
			<h3>{product.productName}</h3>
			{/* Render additional data from the product dictionary */}
		  </div>
		))}
	  </div>
	);
  };
  
// const CategoryDictionary = () => {
//     return (
//         <div>
//         	<h2 >Test:</h2>
// 			{testArray.map((dictionary, index) => (
// 				<div key={index}>
// 				<h3>{dictionary.productName}</h3>
// 				<p>Product ID: {dictionary.product_idz}</p>
// 				<p>Updated At: {dictionary.updated_at}</p>
// 				</div>
// 			))}
// 		</div>
//     );
// };

export default CategoryDictionary;




//// OLD

// Create category.ts
//   const fileContent = `interface propsCodeName<String> {
//     [key: string]: string;
//   }

//   export const category: propsCodeName<String> = ${JSON.stringify(categoryDict, null, 4)};

//   `;

//   fs.writeFile('category.ts', fileContent, (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     } else {
//         console.log('File saved successfully!');
//     }
//   });
  
  // Create brands.ts
//   const fileContent2 = `interface propsCodeName<String> {
//     [key: string]: string;
//   }

//   export const brandName: propsCodeName<String> = ${JSON.stringify(brandsDict, null, 4)};

//   `;

//   fs.writeFile('brands.ts', fileContent2, (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     } else {
//         console.log('File saved successfully!');
//     }
//   });
  
  // Create products.ts
//   const fileContent3 = `export const products = [
// 	${productArray.map((item) => `{
// 		product_id: "${item.product_idz}",
// 		updated_at: "${item.productUpdated}",
// 		name: "${item.productName}",
// 		product_state: "${item.productState}",
// 		has_stock: "${item.productHasStock}",
// 	},`).join('\n')},
// 	];
// 	`;
	
//   fs.writeFile('products.ts', fileContent3, (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     } else {
//         console.log('File saved successfully!');
//     }
//   });


// const testaa = [
// 	{
// 		product_idz: '17a4e9f8-fd38-4df7-a822-ca77e49b9c3f',
// 		updated_at: '2023-07-08 04:46:27',
// 		productName: 'Mini-cesto Isdin Baby Naturals',
// 		productState: 'enabled',
// 		productHasStock: true
// 	},
// 	{
// 		product_idz: '000390d6-c89b-49d2-bd77-9f785ff4a6a8',
// 		updated_at: '2023-06-15 09:52:10',
// 		productName: 'Test New Product IT',
// 		productState: 'enabled',
// 		productHasStock: true
// 	},
// 	];