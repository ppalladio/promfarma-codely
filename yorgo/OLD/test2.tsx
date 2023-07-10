import React from 'react';
import axios from 'axios';
import fs from 'fs';

const CategoryDictionaryComponent = () => {
  // Category Dictionary & Array
  const categoryDict = {};
  const categoryArray = [];

  // Brands Dictionary & Array
  const brandsDict = {};
  const brandsArray = [];

  // Manfacturer Dictionary & Array
  const manufacturerDict = {};
  const manufacturerArray = [];

  // Product Array
  const productArray: { product_idz: any; updated_at: any; productName: any; productState: any; productHasStock: any; }[] = [];

  const searchProducts = async () => {
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

        // Setup Products Array
        const productId = item.product_id;
        const productName = item.name;
        const productUpdated = item.updated_at;
        const productState = item.product_state;
        const productHasStock = item.has_stock;

        const obj = {
          product_idz: productId,
          updated_at: productUpdated,
          productName: productName,
          productState: productState,
          productHasStock: productHasStock
        };

        productArray.push(obj);
      });
    } catch (error) {
      console.error('Error:', error);
    }

    // Create category.ts
    const categoryFileContent = `interface PropsCodeName {
      [key: string]: string;
    }

    export const category: PropsCodeName = ${JSON.stringify(categoryDict, null, 4)};

    `;

    fs.writeFile('category.ts', categoryFileContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File saved successfully: category.ts');
      }
    });

    // Create brands.ts
    const brandsFileContent = `interface PropsCodeName {
      [key: string]: string;
    }

    export const brandName: PropsCodeName = ${JSON.stringify(brandsDict, null, 4)};

    `;

    fs.writeFile('brands.ts', brandsFileContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File saved successfully: brands.ts');
      }
    });

    // Create products.ts
    const productsFileContent = `export const products = [
      ${productArray.map(
        (item) =>
          `{
          product_id: "${item.product_idz}",
          updated_at: "${item.updated_at}",
          name: "${item.productName}",
          product_state: "${item.productState}",
          has_stock: "${item.productHasStock}"
        },`
      )}
    ];
    `;

    fs.writeFile('products.ts', productsFileContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File saved successfully: products.ts');
      }
    });
  };

  // Call the function to search for products
  searchProducts();

  // JSX rendering is not defined in the provided code, so you may need to add it here.

  return productArray; // You can return any JSX element or null based on your requirement.
};

export default CategoryDictionaryComponent;
