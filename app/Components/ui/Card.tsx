import React, { MouseEventHandler } from 'react';
import ButtonFav from './ButtonFav';
import useFavorite from '@/app/Components/hooks/useFavorite';
import { useRouter } from 'next/navigation';

interface Product {
    product_id: string;
    updated_at: string;
    name: string;
    product_state: string;
    has_stock: boolean;
    recommended_prices: {
        amount: number;
        currency: string;
        country: string;
    }[];
    manufacturer: {
        manufacturer_id: string;
        manufacturer_name: string;
    };
    brand: {
        brand_id: string;
        name: string;
    };
    main_category: {
        category_id: string;
        category_name: string;
    };
}

interface CardProps {
    data: Product;
    favorite: boolean;
    onToggleFavorite: (productId: string) => void; // Update the type to include productId
    router: any;
}
const Card: React.FC<CardProps> = ({
    data,
    favorite: isFavorite,
    onToggleFavorite,
    router,
}) => {
    const favorite = useFavorite();

    const handleToggleFavorite: MouseEventHandler<SVGSVGElement> = (event) => {
        event.stopPropagation();
        onToggleFavorite(data.product_id);
    };

    const handleCardClick = () => {
        router.push(`/product/${data?.product_id}`);
    };

    return (
        <div
            className="relative flex flex-col rounded-md w-full h-full p-3 sm:p-1 my-2 cursor-pointer bg-white shadow-md"
            onClick={handleCardClick}
        >
            <ButtonFav
                isFavorite={isFavorite}
                onToggle={handleToggleFavorite}
            />
            <div className="card">
                <hr />
                <h2 className="text-lg text-black text-center pt-3">
                    {data.name}
                </h2>
                {data.recommended_prices.length > 0 && (
                    <p>{data.recommended_prices[0]?.amount} &#8364;</p>
                )}
                {data.brand && <p className="">{data.brand.name}</p>}
                <hr />
            </div>
        </div>
    );
};
export default Card;
