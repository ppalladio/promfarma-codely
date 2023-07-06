import Card from '@/app/Card';
import React from 'react';

import { category, manufacturerName, brandName } from '../Constants/info.ts';

const valuesB = Object.values(brandName);

const BrandList = () => {
    return (
        <div>
			<h2 >Brands:</h2>
			{valuesB.map((value, index) => (
                <p key={index}>&emsp;· {value}</p>
            ))}
		</div>
    );
};

export default BrandList;