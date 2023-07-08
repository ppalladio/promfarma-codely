'use client'
import Card from '@/app/Card';
import React, { useEffect } from 'react';
// import externalScript from '/Users/yorgopetsas/github/tests/code/app/Components/Api/test-api.tsx';
import CategoryDictionary from '/Users/yorgopetsas/github/tests/code/app/Components/Api/api.js';

// function App() {
//     useEffect(() => {
//       externalScript(); 
//     }, []);
  
//     return (
//       <div className="App">
//         File Created
//       </div>
//     );
//   }
  
// export default App;
  
  

const TestList = () => {
    const categoryValues = Object.values(CategoryDictionary);

    return (
        <div>
            <h2>Categories:</h2>
            TestComponent
            {/* {categoryValues.map((value, index) => (
                <p key={index}>&emsp;{index}: {value}</p>
            ))} */}
        </div>
    );
};

export default TestList;



// import CategoryDictionary  from '/Users/yorgopetsas/github/tests/code/app/Components/Api/api.js';


// TESTS
// import CategoryDictionary from '/Users/yorgopetsas/github/tests/code/app/Components/Api/test-api-react.tsx';

// console.log('Log of Dictionary', CategoryDictionary[0]);


// const brandValues = Object.values(CategoryDictionary);

// const BrandList = () => {
//     return (
//         <div>
// 			<h2 >Brands:</h2>
//             {brandValues.map((product, index) => (
//                 <h2 key={index}>{product.productName}</h2>
//             ))}
// 		</div>
//     );
// };