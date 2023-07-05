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
			{keys}
			{/* {keys.map((key) => {
				const kk = key
				return (
					{kk}
				)
				}
			)} */}

		</div>    
    );
};

export default BrandList;
