import Card from '@/app/Card';
import React from 'react';
// import { category } from '../Constants/info.ts';
import { category } from '../Api/category.ts';

const categoryValues = Object.values(category);

const CategoryList = () => {
    return (
        <div>
        	<h2 >Categories:</h2>
        	{categoryValues.map((value, index) => (
				    <p >&emsp;{index}: {value}</p>
          ))}
		</div>
    );
};

export default CategoryList;
