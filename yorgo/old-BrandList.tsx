import Card from '@/app/Card';
import React from 'react';
// import { brandName } from '../Constants/info.ts';
import { brandName } from '../Api/brands.ts';

const brandValues = Object.values(brandName);

const BrandList = () => {
    return (
        <div>
			<h2 >Brands:</h2>
			{brandValues.map((value, index) => (
                <p >&emsp;{index}: {value} </p>
            ))}
		</div>
    );
};

export default BrandList;
