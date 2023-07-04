import Card from '@/app/Card'
import React from 'react'
import { products } from '../Constants/products';
import {category,manufacturerName,brandName} from '../Constants/info.js'

interface Price {
	amount?:number;
	currency?:string;
	country?:string;
}
const ProductList = () => {
    return (
		
		<div>
		{products.map((product) => {
			const price = product.recommended_prices.find(
			  (price) => price.country === 'ES'
			);
	
			return (
			  <Card
				id={product.product_id}
				name={product.name}
				country={price?.country}
				price={price?.amount}
				state={product.product_state}
				brandId={products.brand.brand_id}
				brandName={brandName[products.brand.brand_id]}
				manufacturerId={product.manufacturer.manufacturer_id}
				manufacturerName={product.manufacturer.manufacturer_name}
				favorite={false} // Set your favorite logic here
				favoriteImg={''} // Set the favorite image URL if needed
				productIndex={''} // Set the product index if needed
				category={product.main_category.category_name}
				hasStock={product.has_stock}
				onSubmit={() => {}}
			  />
			);
			 })}
		</div>
	  );
	};

export default ProductList