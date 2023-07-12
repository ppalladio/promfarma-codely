'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  product_id: string;
  updated_at: string;
  name: string;
  product_state: string;
  has_stock: boolean;
  recommended_prices: {
    amount: number;
    currency: string;
    country: string;
  }[];
  manufacturer: {
    manufacturer_id: string;
    manufacturer_name: string;
  };
  brand: {
    brand_id: string;
    name: string;
  };
  main_category: {
    category_id: string;
    category_name: string;
  };
}

const useProductList = (apiUrl: string, pageSize: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
            page: 1, // Fetching only the first page as we need a single product
          },
        });

        const responseData = response.data.data.response;
        const fetchedProducts = responseData.products;
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, pageSize]);

  return { products, loading };
};

export default useProductList;
