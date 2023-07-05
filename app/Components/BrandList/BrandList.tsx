import Card from '@/app/Card';
import React from 'react';

import { category, manufacturerName, brandName } from '../Constants/info.ts';

const keys = Object.keys(category);
// const key = keys[0];

// const yorgo = category

			{/* const container = document.getElementById('container');

			Object.entries(manufacturerName).forEach(([key, value]) => {
				const element = document.createElement('p');
				element.textContent = `${key}: ${value}`;
				container.appendChild(element);
			}); */}

const BrandList = () => {
    return (
        <div>
			{keys.map((key) => {
				const kk = key
				return (
					{kk}
				)
				}
			)}

		</div>    
    );
};

export default BrandList;

// {category.forEach(Element) => {
// 	const family = element;				
// });
// return (
// 	<div>{family}
// 	</div>
// 	);
// };


{/* {category.map((categoria) => { */}
                {/* return ( */}
                    {/* <div key={categoria}> */}
                        {/* <Card
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
                          
                        /> */}
                    {/* </div> */}
                {/* ); */}
            {/* })} */}