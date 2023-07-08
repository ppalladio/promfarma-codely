import Card from '@/app/Card';
import React from 'react';

import { category, manufacturerName, brandName } from '../Constants/info.ts';
import { manufacturerData } from '/Users/yorgopetsas/github/tests/code/app/Components/Api/api.js';

// const valuesB = Object.values(brandName);

// const BrandList = () => {
//     return (
//         <div>
//             {manufacturerData}
// 			{/* <h2 >Brands:</h2>
// 			{valuesB.map((value, index) => (
//                 <p >&emsp;{index}: {value} </p>
//             ))} */}
// 		</div>
//     );
// };

// export default BrandList;

const BrandList = () => {
    // const manufacturerData = {
    //   "629d59d0-7dc5-46b7-abbc-923a275e670e": "IFC CANTABRIA",
    //   "96911f95-9ac8-4d6d-a3e7-236ddf5dcefe": "SOCIEDAD EUROPEA DE SERVICIOS SOCIOSANITARIOS",
    // };
  
    const manufacturerNames = Object.values(manufacturerData);
  
    return (
      <div>
        <h2>Brands:</h2>
        {manufacturerNames.map((name, index) => (
          <p key={index}>&emsp;{name}</p>
        ))}
      </div>
    );
  };
  
  export default BrandList;