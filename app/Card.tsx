
import React from 'react';

type CardProps = {
    id: string;
    name: string;
    price: string; //> current price
    pvp: string; //> recommended price
    brandName: string;
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
    return <div>Card</div>;
};

export default Card;
