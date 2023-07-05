const axios = require('axios');
const fs = require('fs');

async function searchProducts() {
  const apiUrl = 'https://graphql.stg.promofarma.com/graphql';

  try {
    const response = await axios.post(apiUrl, {
      query: `
        query SearchProducts {
          response: searchProducts(            
            # productName: "K-Ox"
            # categoryIds: ["f6738502-b893-4fed-9cf1-75d85f3b34c7"]
            # brandIds: ["fdff0064-6a42-441d-a565-5b74f8274d91"]
			# productIds: ["d3cb7655-bf82-4ecb-ac0d-3015fa36e466"]
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
//     const responseData = response.data.data.response;
    
    const products = responseData.products;
//     console.log(products);
	const mainCategoryDict = {};
	
	products.forEach((item) => {
		const mainCategory = item.main_category;
		mainCategoryDict[mainCategory.category_id] = mainCategory.category_name;
	});
	
	console.log(mainCategoryDict);
		
	fs.writeFileSync('response.json', JSON.stringify(responseData));
//     console.log('Response saved to response.json', responseData);
//     	console.log(responseData);
	
	
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to search for products
searchProducts();