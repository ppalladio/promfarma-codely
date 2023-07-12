import React from 'react';
import './Header.css';
import Image from 'next/image';
import DesktopLogo from '../../assets/logo-desktop.svg';
import FavoriteAction from './FavoriteAction';


const Header = () => {
    return (
        <header className="header lg:bg-white bg-primary_green text-white lg:text-base">

            <FavoriteAction />
        </header>
    );
};

export default Header;
