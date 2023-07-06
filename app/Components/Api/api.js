const axios = require('axios');
const fs = require('fs');

async function searchProducts() {
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

// TOOLS
// API FILTERS
// # productHasStock: null 
// # productState: null 
// # product_id: "c1e8d218-8a47-4064-ab95-a59cb6356a5c"
// # productName: "Heliocare"
// # categoryIds: ["f6738502-b893-4fed-9cf1-75d85f3b34c7"]
// # brandIds: ["fdff0064-6a42-441d-a565-5b74f8274d91"]
//
// Save the response to 'response.json'
// 	fs.writeFileSync('response.json', JSON.stringify(allProducts));
//     console.log('Response saved to response.json');
//
// Save response in a variable 'responseData'
// 	console.log(allProducts);
//     const responseData = response.data.data.response;  