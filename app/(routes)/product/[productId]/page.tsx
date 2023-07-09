'use client';
import React, { ReactNode } from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/app/Components/Constants/products';


interface ProductPageProps {
    name: string;
    brand: ReactNode;
    price: number;
    description: string;
    manufacturer: string;
    hasStock?: boolean;
}


const ProductPage: React.FC<ProductPageProps> = () => {
    const { ...param } = useParams();

    console.log(param);
    const id = param.productId;
    console.log(id);

	
    // Find the product with the matching ID
    const product = products.find((product) => product.product_id === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    const { name, brand, price, description, manufacturer, hasStock } = product;


    return (
        <div>
            <h1>{name}</h1>
			<p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Available: {hasStock ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default ProductPage;
