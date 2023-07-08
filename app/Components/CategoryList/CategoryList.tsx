import Card from '@/app/Card';
import React from 'react';
import { category } from '../Constants/info.ts';

const values2 = Object.values(category);

const CategoryList = () => {
    return (
        <div>
        	<h2 >Categories:</h2>
        	{values2.map((value, index) => (
				<p >&emsp;{index}: {value}</p>
            ))}
		</div>
    );
};

export default CategoryList;







// WORKING CODE BELOW
// const valuesC = Object.values(category);

// const CategoryList = () => {
//     return (
//         <div>
//         	<h2 >Categories:</h2>
//             {category}
//         	{/* {valuesC.map((value, index) => (
// 				<p key={index}>&emsp;· {value}</p> */}
//             ))}
// 		</div>
//     );
// };
// END WORKING CODE


// import category2 from '../Api/CategoryDictionary.tsx/index.js';

	// fs.writeFileSync('response.ts', JSON.stringify(category2));
  //   console.log('Response saved to response.ts');