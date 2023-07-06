import Card from '@/app/Card';
import React from 'react';
import { products } from '../Constants/products';
import { category, manufacturerName, brandName } from '../Constants/info.ts';

interface Price {
    amount?: number;
    currency?: string;
    country?: string;
}
const ProductList = () => {
    return (
        <div className='flex flex-row flex-wrap my-3 '>
            {products.map((product) => {
                const price = product.recommended_prices.find(
                    (price) => price.country === 'ES',
                ); //@in case price ES does not exist

                return (
                    <div className='grid grid-cols-1 w-1/6 h-[300px] mx-[15px] ' key={product.product_id}>
                        <Card
                            id={product.product_id}
                            name={product?.name ?? ''}
                            country={price?.country}
                            price={price?.amount}
                            state={product.product_state}
                            brandId={product.brand.brand_id}
                            brandName={brandName[product.brand.brand_id]}
                            manufacturerId={
                                manufacturerName[
                                    product.manufacturer.manufacturer_id
                                ]
                            }
                            manufacturerName={
                                product.manufacturer.manufacturer_name
                            }
                            favorite={false} // Set your favorite logic here
                            favoriteImg={''} // Set the favorite image URL if needed
                            productIndex={''} // Set the product index if needed
                            // category={
                            //     category[product.main_category!.category_id]
                            // } //! category can be null
                            hasStock={product.has_stock}
                          
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
