import Card from '@/app/Card';
import React from 'react';
import { category } from '../Constants/info.ts';

import category2 from '../Api/category-dictionary.js';

	// fs.writeFileSync('response.ts', JSON.stringify(category2));
  //   console.log('Response saved to response.ts');

const values2 = Object.values(category2);

const CategoryList = () => {
    return (
        <div>
        	<h2 >Categories:</h2>
                {category2}
        	{/* {values2.map((value, index) => (
				<p key={index}>&emsp;· {value}</p> */}
            {/* ))} */}
		</div>
    );
};




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

export default CategoryList;