import Card from '@/app/Card';
import React from 'react';

import { category, manufacturerName, brandName } from '../Constants/info.ts';

const valuesC = Object.values(category);
const valuesM = Object.values(manufacturerName);
// const valuesB = Object.values(brandName);

const BrandList = () => {
    return (
        <div>
			<p >Categories</p>
			<p >{valuesC}</p>
			<p ></p>
			<p >Manufacturers</p>
			<p >{valuesM}</p>
			<p ></p>
			{/* <p >Brands</p>
			<p >{valuesB}</p> */}
		</div>
    );
};

export default BrandList;


			{/* const container = document.getElementById('container');

			Object.entries(manufacturerName).forEach(([key, value]) => {
				const element = document.createElement('p');
				element.textContent = `${key}: ${value}`;
				container.appendChild(element);
			}); */}

			{/* {keys.map((key) => {
				const kk = key
				return (
					{kk}
				)
				}
			)} */}