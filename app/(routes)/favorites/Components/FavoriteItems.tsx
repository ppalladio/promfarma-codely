import { X } from 'lucide-react';

import IconButton from '../../../Components/ui/IconButton';
import useFavorite from '@/app/Components/hooks/useFavorite';

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

interface FavoriteItemProps {
    data: Product;
}

const CartItem: React.FC<FavoriteItemProps> = ({ data }) => {
    const favorite = useFavorite();

    const onRemove = () => {
        favorite.removeItem(data.product_id);
    };

    return (
        <li className="flex py-6 border-b">
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onRemove} icon={<X size={15} />} />
                </div>
                <div className="relative items-center justify-center pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className=" text-lg font-semibold text-black">
                            {data.name}
                        </p>
                    </div>

                    <div className="mt-1 flex text-sm">
                        <p className="capitalize  text-gray-500">
                            {' '}
                            <span className="text-black text-lg font-600">
                                Brand{' '}
                            </span>
                            {data.brand.name}
                        </p>
                        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                            <span className="text-lg font-500 text-black">
                                Category{' '}
                            </span>
                            {data.main_category.category_name}
                        </p>
                    </div>

                    <span>
                        {data.recommended_prices.find(
                            (price) => price.country === 'ES',
                        )?.amount ||
                            data.recommended_prices[0]?.amount ||
                            'Price Not available'}{' '}
                        &#8364;
                    </span>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
