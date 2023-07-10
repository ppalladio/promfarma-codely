// import { useState } from 'react';
const axios = require('axios');

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

async function searchProducts(productArray) {
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
        // obj.categoryId = category_idz;
        obj.categoryName = category_namez;
        productArray.push(obj);
        

	});

    } catch (error) {
        console.error('Error:', error);
    } 
    
    // console.log(typeof productArray);
    console.log(productArray);
    // return (productArray);
    const [categoryDictionary, setCategoryDictionary] = useState([]);

    setCategoryDictionary(productArray);
};

// Call the function to search for products
// const CategoryDictionary = searchProducts(productArray);
searchProducts(productArray);

// console.log(CategoryDictionary);

// export default searchProducts(productArray);