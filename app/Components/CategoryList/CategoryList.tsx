import Card from '@/app/Card';
import React from 'react';

import { category } from '../Constants/info.ts';

const valuesC = Object.values(category);

const CategoryList = () => {
    return (
        <div>
        	<h2 >Categories:</h2>
        	{valuesC.map((value, index) => (
				<p key={index}>&emsp;· {value}</p>
            ))}
		</div>
    );
};

export default CategoryList;