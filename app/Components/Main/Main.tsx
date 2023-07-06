import React from 'react';
import SideBar from '../Sidebar/Sidebar';
import ProductList from '../ProductList/ProductList';

const Main = () => (
    <section className="flex flex-row">
        <SideBar  />
        <ProductList />
    </section>
);

export default Main;
