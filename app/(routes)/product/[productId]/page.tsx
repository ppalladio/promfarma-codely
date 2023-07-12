'use client'
import React, { useEffect, useState } from 'react';
import { useRouter,useSearchParams } from 'next/navigation';
import useProductList from '@/app/Components/hooks/useProductList';

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

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const productId = useSearchParams().get('name');
 
  console.log(productId);
  

  const apiUrl = 'https://graphql.stg.promofarma.com/graphql';
  const pageSize = 1;
  const { products, loading: productListLoading } = useProductList(apiUrl, pageSize);

  useEffect(() => {
	if (!productListLoading && products.length > 0) {
	  const foundProduct = products.find((product) => product.product_id === productId);
	  if (foundProduct) {
		setProduct(foundProduct);
	  } else {
		setLoading(false);
	  }
	} else {
	  setLoading(false);
	}
  }, [products, productId, productListLoading]);

  if (loading || productListLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    name,
    brand,
    recommended_prices,
    main_category,
    manufacturer,
    has_stock,
  } = product;

  const price = recommended_prices[0]?.amount;
  const category = main_category?.category_name;
  const manufacturerName = manufacturer?.manufacturer_name;

  return (
    <div>
      <h1>{name}</h1>
      <p>Brand: {brand}</p>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      <p>Manufacturer: {manufacturerName}</p>
      {has_stock && <p>Available in stock</p>}
    </div>
  );
};

export default ProductPage;
