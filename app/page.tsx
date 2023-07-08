
import React from 'react';
import 'app/App.css';
import GeoLocation from './Components/GeoLocation/GeoLocation';
import ProductList from './Components/ProductList/ProductList';
import BrandList from './Components/BrandList/BrandList';
import CategoryList from './Components/CategoryList/CategoryList';

function App() {
  return (
    <><div>
          <GeoLocation /><br />
      </div>
      <div style={{float: 'left',}}>
          <BrandList /><br />
          
      </div>
      <div>
            <CategoryList /><br />
            {/* <ProductList/> */}
      </div>
    </>
  );

}

export default App;
