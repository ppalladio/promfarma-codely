import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '../ui/Card';
import Pagination from '../Main/Pagination';

import useProductList from '../hooks/useProductList';

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

interface CardProps extends Product {
    favorite: boolean;
    onToggleFavorite: () => void;
    router: any;
}

interface ProductListProps {
    selectedCategories: string[];
    selectedBrands: string[];
}

const ProductList: React.FC<ProductListProps> = ({
    selectedCategories,
    selectedBrands,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);

    const apiUrl = 'https://graphql.stg.promofarma.com/graphql';
    const pageSize = 14;
    const products = useProductList(apiUrl, pageSize);
    const router = useRouter();
    const ITEMS_PER_PAGE = 8;

    useEffect(() => {
        const filterProducts = () => {
            const filtered = products.filter((product) => {
                const isSelectedCategory =
                    selectedCategories.length === 0 ||
                    (product.main_category &&
                        selectedCategories.includes(
                            product.main_category.category_id,
                        ));
                const isSelectedBrand =
                    selectedBrands.length === 0 ||
                    selectedBrands.includes(product.brand.brand_id);
                return isSelectedCategory && isSelectedBrand;
            });
            setFilteredProducts(filtered);
            setCurrentPage(1);
        };

        filterProducts();
    }, [selectedCategories, selectedBrands, products]);

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const displayedProducts = filteredProducts.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleToggleFavorite = (productId: string) => {
        if (favoriteProducts.includes(productId)) {
            const updatedFavorites = favoriteProducts.filter(
                (id) => id !== productId,
            );
            setFavoriteProducts(updatedFavorites);
        } else {
            setFavoriteProducts([...favoriteProducts, productId]);
        }
    };

    return (
        <div className="flex flex-wrap my-3">
            {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                    <div
                        className="w-full sm:w-1/2 lg:w-1/4 p-2"
                        key={product.product_id}
                    >
                        <Card
                            data={product}
                            favorite={favoriteProducts.includes(
                                product.product_id,
                            )}
                            onToggleFavorite={() =>
                                handleToggleFavorite(product.product_id)
                            }
                            router={router}
                        />
                    </div>
                ))
            ) : (
                <p>No products available.</p>
            )}
            <div className="">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ProductList;
