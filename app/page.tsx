'use client'
import 'app/App.css';
import React from 'react';
import GeoLocation from './Components/GeoLocation/GeoLocation';
import BrandList from './Components/BrandList/newBrandList';
import CategoryList from './Components/CategoryList/newCategoryList';
import ProductList from './Components/ProductList/newProductList';
import ManufacturerList from './Components/ManufacturerList/newManufacturerList';
import SideBar from './Components/Sidebar/Sidebar';
import ToggledTags from '../Sidebar/ToggleTags';

// LATER
// import ProductList from './Components/ProductList/ProductList';
// import ManufacturerList from './Components/ManufacturerList/ManufacturerList';
// import BrandList from './Components/BrandList/BrandList';

function App() { 
  return (
      <>
        <div>
            {/* <GeoLocation /><br /> */}
        </div>
        <div style={{float: 'left',}}>
            {/* <BrandList /><br /> */}
        </div>
        <div style={{float: 'left',}}>
            {/* <ManufacturerList /><br /> */}
        </div>
        <div>
              {/* <CategoryList /><br /> */}
        </div>
        <div>
              {/* <ProductList/> */}
              <SideBar />
              
        </div>
      </>
  );
}

export default App;
