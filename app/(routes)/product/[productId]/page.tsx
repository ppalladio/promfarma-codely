'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/app/Components/Constants/products';

interface ProductPageProps {
    name: string;
    brand: string;
    price: number;
    category: string;
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

    const { name, recommended_prices, manufacturer, brand, main_category } =
        product;
    const price = recommended_prices[0]?.amount;
    const category = main_category?.category_name;
    const manufacturerName = manufacturer?.manufacturer_name;
    const brandName = brand?.name;

    return (
        <div>
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>Manufacturer: {manufacturerName}</p>
            <p>Category: {category}</p>
            <p>Brand: {brandName}</p>
        </div>
    );
};

export default ProductPage;
