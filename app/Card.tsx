import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

interface CardProps {
    id: string;
    name: string;
    state?: string;
    brandName?: string;
    brandId?: string;
    price?: number | string; // Update the type to allow null
    favorite?: boolean; // Add the favorite prop
    favoriteImg?: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({
    id,
    name,
    state,
    brandName,
    price,
    className,
}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${id}`);
    };

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div
            onClick={handleClick}
            className={`relative flex flex-wrap flex-col rounded-[5px] h-[360px] p-3 sm:p-1 my-2 cursor-default ${className}`}
        >
            <FaHeart
                className={`favorite-icon ${
                    isFavorite ? 'favorite-icon--active' : ''
                }`}
                onClick={handleFavoriteClick}
            />
            <div className="card">
                <hr />
                <h2 className="text-lg text-black text-center pt-3 ">{name}</h2>
                {price !== null && <p>{price}</p>}
                {brandName && <p className="">{brandName}</p>}
                <hr />
            </div>
        </div>
    );
};

export default Card;
