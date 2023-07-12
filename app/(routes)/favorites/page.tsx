'use client';

import { useEffect, useState } from 'react';
import useFavorite from '@/app/Components/hooks/useFavorite';

import FavoriteItems from './Components/FavoriteItems';

export const revalidate = 0;

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const favorite = useFavorite();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="bg-white">
            <div className="px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-black capitalize">
                    favorite Items
                </h1>
                <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                    <div className="lg:col-span-7">
                        {favorite.items.length === 0 && (
                            <p className="text-neutral-500">
                                No items added to cart.
                            </p>
                        )}
                        <ul>
                            {favorite.items.map((favorite) => (
                                <FavoriteItems
                                    key={favorite.product_id}
                                    data={favorite}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
