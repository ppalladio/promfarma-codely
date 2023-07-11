import React from 'react';
import Link from 'next/link';
import './Header.css';

const NamePage = () => {
  return (
    <Link href="/" passHref>
      <span className="logo-link">
        <h1 className="namePage">PromoFarma</h1>
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
    <header className="header">
      <NamePage />
      <Buttons />
    </header>
  );
};

export default Header;
