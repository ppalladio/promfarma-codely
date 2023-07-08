'use client';

import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
interface CardProps  {
	key?: string;
    id: string;
    name: string ;
	country?:string;
    price?: number; //> current price
	state?:string;
    brandName?: string;
	brandId?:string;
	manufacturerId?:string;
	manufacturerName?:string;
    favorite?: boolean; //> favorite
    favoriteImg?: string;
    productIndex?: string;
    category?: string; //> Skincare
    hasStock?: boolean;
	className?: string;
    // onSubmit?: () => void;
};

const Card: React.FC<CardProps> = ({
	key,
    id,
    name,
	country,
	state,
	brandName,
    brandId,
	manufacturerId,
	manufacturerName,
    price,
    favorite,
    favoriteImg,
    productIndex,
    category,
    hasStock,

	className
    // onSubmit,
}) => {
    const [isFavorite, setIsFavorite] = useState(favorite);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="relative flex flex-wrap flex-col rounded-[5px] h-[360px] p-3 sm:p-1 my-2 cursor-default ">
            <FaHeart
                className={`favorite-icon ${isFavorite ? 'favorite-icon--active' : ''}`}
                onClick={handleFavoriteClick}
            />
            <div className='flex flex-col justify-between items-center h-[300px] bg-dark_gray rounded-tr-[12px]'>
				<hr />
                <h2 className='text-lg text-black  text-center pt-3 '>{name}</h2>
                <p>{price}</p>
				<p className=''>{brandName}</p>
				<hr />
            </div>
        </div>
    );
};
export default Card;
