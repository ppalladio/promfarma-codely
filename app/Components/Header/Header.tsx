'use client'
import Image from 'next/image';
import DesktopLogo from '../../assets/logo-desktop.svg';
import MobileLogo from '../../assets/logo-md.svg';
import FavoriteAction from './FavoriteAction';
import { useMediaQuery } from '@react-hook/media-query';

const Header = () => {
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    return (
        <div className='flex flex-row items-center'>
            {isDesktop ? (
                <div className="mt-6 px-5">
                    <header className="header text-white items-center w-full">
                        <Image
                            src={DesktopLogo}
                            alt="Desktop Logo"
                            className="w-[20rem]"
                        />
                        <FavoriteAction />
                    </header>
                </div>
            ) : (
                <div>
                    <header className="header bg-primary_green text-white items-center pt-3 w-full">
                        <Image src={MobileLogo} alt="Mobile Logo" className="w-[10rem]"/>
                        <FavoriteAction />
                    </header>
                </div>
            )}
        </div>
    );
};

export default Header;
