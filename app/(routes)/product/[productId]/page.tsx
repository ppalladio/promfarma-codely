'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/app/Components/Constants/products';

const ProductPage: React.FC = () => {
    const { productId } = useParams();

    const product = products.find(
        (product) => product.product_id === productId,
    );

    if (!product) {
        return <div>Product not found</div>;
    }

    const { name, recommended_prices, manufacturer, brand, main_category } =
        product;
    const price = recommended_prices[0]?.amount;
    const category = main_category?.category_name;
    const manufacturerName = manufacturer?.manufacturer_name;
    const brandName = (brand as { brand_id: string; name: string }).name;

    return (
        <div className="px-4 py-10 sm:px-6 lg:px-8  flex flex-col align-center">
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 leading-5">
                <h1 className="font-semibold text-2xl ">{name}</h1>
                <p className="text-gray-500">
                    {' '}
                    <span className="font-semibold text-black text-lg">
                        {' '}
                        Price:{' '}
                    </span>{' '}
                    {price} <span className="text-brand_ds_text"> &#8364;</span>
                </p>
                <p className="text-gray-500">
                    {' '}
                    <span className="font-semibold text-black text-lg">
                        Manufacturer:{' '}
                    </span>
                    {manufacturerName}
                </p>
                <p className="text-gray-500">
                    {' '}
                    <span className="font-semibold text-black text-lg">
                        Category:{' '}
                    </span>
                    {category}
                </p>
            </div>
        </div>
    );
};

export default ProductPage;
