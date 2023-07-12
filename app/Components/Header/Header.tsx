'use client'
import Image from 'next/image';
import DesktopLogo from '../../assets/logo-desktop.svg';
import MobileLogo from '../../assets/logo-md.svg';
import FavoriteAction from './FavoriteAction';
import { useMediaQuery } from '@react-hook/media-query';

const Header = () => {
    const isDesktop = useMediaQuery('(min-width: 992px)');
    return (
        <div >
            {isDesktop ? (
                <div >
                    <header className="flex py-6 px-5 flex-row justify-between bg-gray-100 text-white items-center w-full">
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
                    <header className="flex flex-row justify-between px-3 py-2g bg-primary_green text-white items-center pt-3 w-full">
                        <Image src={MobileLogo} alt="Mobile Logo" className="w-[10rem]"/>
                        <FavoriteAction />
                    </header>
                </div>
            )}
        </div>
    );
};

export default Header;
