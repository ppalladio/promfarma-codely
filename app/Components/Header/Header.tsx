import React from 'react';
import Link from 'next/link';
import './Header.css';
import Image from 'next/image';
import DesktopLogo from '../../assets/logo-desktop.svg';
const NamePage = () => {
    return (
        <Link href="/" passHref>
            <span className="logo-link ">
                <Image
                    alt="desktop logo"
                    src={DesktopLogo}
                    className='w-15'
                />
            </span>
        </Link>
    );
};

const Buttons = () => {
    return (
        <div className="button-container">
            <Link href="/favorites" passHref>
                <span className="headerNav">Favorites</span>
            </Link>
            <Link href="/aboutUs" passHref>
                <span className="headerNav">About us</span>
            </Link>
        </div>
    );
};

const Header = () => {
    return (
        <header className="header lg:bg-white bg-primary_green text-white lg:text-base">
            <NamePage />
            <Buttons />
        </header>
    );
};

export default Header;
