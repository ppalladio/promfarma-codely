import 'app/App.css';
// import React from 'react';
import GeoLocation from './Components/GeoLocation/GeoLocation';
import ProductList from './Components/ProductList/ProductList';
import BrandList from './Components/BrandList/BrandList';
import CategoryList from './Components/CategoryList/CategoryList';
import ManufacturerList from './Components/ManufacturerList/ManufacturerList';

// TEMP
import React, { useEffect, useState } from 'react';
// import TestList from './Components/TestComponent/testComponent';
// import CategoryDictionary from './Components/Api/test-api-react';
// import CategoryDictionaryComponent from './Components/Api/test2'
// Context TEST
// import NavBar from "./Components/NavBa/NavBar";
// import PostsPage from "./Components/PostsPage/PostsPage";
// import AuthContextProvider from '/Users/yorgopetsas/github/tests/code/app/Contexts/AuthContext.js'; 
import CategoryDictionary from '/Users/yorgopetsas/github/tests/code/app/Components/Api/CategoryDictionary';

function App() { 

  return (
      <>
        {/* {CategoryDictionary /} */}
        {/* {/* <NavBar />  */}
        {/* <PostsPage />  //  user={user} */}
        <div>
            <GeoLocation /><br />
        </div>
        <div>
            {/* <TestList /><br /> */}
            {/* <CategoryDictionaryComponent /><br /> */}
        </div>
        <div style={{float: 'left',}}>
            <BrandList /><br />
            
        </div>
        <div style={{float: 'left',}}>
            <ManufacturerList /><br />
        </div>
        <div>
              <CategoryList /><br />
        </div>
        <div>
              <ProductList/>
        </div>
      </>
  );
}

export default App;
