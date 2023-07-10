import React from 'react';
import SideBar from '../Sidebar/Sidebar';
import ProductList from '../ProductList/ProductList';
import Header from '../Header/Header'

const Main = () => (
    <section className="flex flex-row">
        <SideBar  />
        <ProductList />
    </section>
);

export default Main;
