'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
interface CardProps {
    key?: string;
    id: string;
    name: string;
    country?: string;
    price?: number; //> current price
    state?: string;
    brandName?: string;
    brandId?: string;
    manufacturerId?: string;
    manufacturerName?: string;
    favorite?: boolean; //> favorite
    favoriteImg?: string;
    productIndex?: string;
    category?: string; //> Skincare
    hasStock?: boolean;
    className?: string;
    // onSubmit?: () => void;
}

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
    className,
    // onSubmit,
}) => {
    const [isFavorite, setIsFavorite] = useState(favorite);
	const router = useRouter();
	const handleClick=()=>{
		router.push(`/product/${id}`);
	}

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
      
            <div onClick={handleClick} className="relative flex flex-wrap flex-col rounded-[5px] h-[360px] p-3 sm:p-1 my-2 cursor-default ">
                <FaHeart
                    className={`favorite-icon ${
                        isFavorite ? 'favorite-icon--active' : ''
                    }`}
                    onClick={handleFavoriteClick}
                />
                <div className="card">
                    <hr />
                    <h2 className="text-lg text-black  text-center pt-3 ">
                        {name}
                    </h2>
                    <p>{price}</p>
                    <p className="">{brandName}</p>
					
                    <hr />
                </div>
            </div>

    );
};
export default Card;
