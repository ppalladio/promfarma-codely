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
    // onSubmit,
}) => {
    const [isFavorite, setIsFavorite] = useState(favorite);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="relative flex flex-wrap flex-col p-3 sm:p-4 my-2 bg-gray-200 ">
            <FaHeart
                className={` favorite-icon ${isFavorite ? 'favorite-icon--active' : ''}`}
                onClick={handleFavoriteClick}
            />
            <div>
				<hr />
                <h2>{name}</h2>
                <p>{price}</p>
				<p>{brandName}</p>
				<hr />
            </div>
        </div>
    );
};
export default Card;
