const axios = require('axios');
const fs = require('fs');

async function searchProducts() {
  const apiUrl = 'https://graphql.stg.promofarma.com/graphql';

  try {
    const response = await axios.post(apiUrl, {
      query: `
        query SearchProducts {
          response: searchProducts(
            # productHasStock: null 
            # productState: null 
            # product_id: "c1e8d218-8a47-4064-ab95-a59cb6356a5c"
            # productName: "Heliocare"
            # categoryIds: ["f6738502-b893-4fed-9cf1-75d85f3b34c7"]
            # brandIds: ["fdff0064-6a42-441d-a565-5b74f8274d91"]
            productHasStock: true
            productState: "enabled"
            # size: 4
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
    
    
//     fs.writeFileSync('response.json', JSON.stringify(responseData));
//     console.log('Response saved to response.json', responseData);

// 	var firstElement = responseData[0];
// 	console.log(firstElement);

// 	var parsedData = JSON.parse(responseData);
	
	
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to search for products
searchProducts();