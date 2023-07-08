'use client'
import React, { useState } from 'react';
import Card from '@/app/Card';
import { products } from '../Constants/products';
import { category, manufacturerName, brandName } from '../Constants/info.ts';
import Pagination from '../Main/Pagination';

const ITEMS_PER_PAGE = 8; // Number of items to display per page

const ProductList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Filter products with prices
    const pricedProducts = products.filter((product) => {
        const price = product.recommended_prices.find((price) => price.country === 'ES');
        return price && price.amount !== undefined && product.recommended_prices.length > 0; // Return true for products with available prices
    });

    const totalPages = Math.ceil(pricedProducts.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const displayedProducts = pricedProducts.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex flex-wrap my-3">
            {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => {
                    const price = product.recommended_prices.find((price) => price.country === 'ES');
                    const country = price?.country; // Find the country within the recommended_prices array
                    return (
                        <div className="w-full sm:w-1/2 lg:w-1/4 p-2" key={product.product_id}>
                            <Card
                                id={product.product_id}
                                name={product?.name ?? ''}
                                country={country}
                                price={price?.amount}
                                state={product.product_state}
                                brandId={product.brand.brand_id}
                                brandName={brandName[product.brand.brand_id]}
                                manufacturerId={manufacturerName[product.manufacturer.manufacturer_id]}
                                manufacturerName={product.manufacturer.manufacturer_name}
                                favorite={false} // Set your favorite logic here
                                favoriteImg={''} // Set the favorite image URL if needed
                                productIndex={''} // Set the product index if needed
                                hasStock={product.has_stock}
                            />
                        </div>
                    );
                })
            ) : (
                <p>No products with prices available.</p>
            )}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ProductList;
