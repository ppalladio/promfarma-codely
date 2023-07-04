'use client';

import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
type CardProps = {
    id: string;
    name: string;
    price: string; //> current price
    brandName?: string;
    pvp?: string; //> recommended price
    favorite?: boolean; //> favorite
    favoriteImg?: string;
    productIndex?: string;
    categoryOne?: string; //> Skincare
    categoryTwo?: string; //>Moisturizers
    hasStock?: number;
    discount?: number;
    sales?: boolean;
    saleType?: string; //>"BPC" (Buy-1-Get-1 Free), "Discount," "Special Offer,"
    saleCountry?: string;
    onSubmit?: () => void;
};

const Card: React.FC<CardProps> = ({
    id,
    name,
    price,
    pvp,
    brandName,
    favorite,
    favoriteImg,
    productIndex,
    categoryOne,
    categoryTwo,
    hasStock,
    discount,
    sales,
    saleType,
    saleCountry,
    onSubmit,
}) => {
    const [isFavorite, setIsFavorite] = useState(favorite);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="relative">
            <FaHeart
                className={`favorite-icon ${isFavorite ? 'favorite-icon--active' : ''}`}
                onClick={handleFavoriteClick}
            />
            <div>
                <h2>{name}</h2>
                <p>{price}</p>
            </div>
        </div>
    );
};
export default Card;
