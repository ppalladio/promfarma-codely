import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '../ui/Card';
import Pagination from '../Main/Pagination';
import useProductList from '../hooks/useProductList';
import useFavorite from '../hooks/useFavorite';

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
    const [page, setPage] = useState(1); // New state variable for the current page
    const { items: favoriteItems, addItem, removeItem } = useFavorite();
	const isFavorite = (productId: string) => {
        return favoriteItems.some(item => item.product_id === productId);
    }
    const apiUrl = 'https://graphql.stg.promofarma.com/graphql';
    const pageSize = 14;
    const { products, loading } = useProductList({ apiUrl, pageSize, page });
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
	const handleToggleFavorite = (product: Product) => {
        if (isFavorite(product.product_id)) {
            removeItem(product.product_id);
        } else {
            addItem(product);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!products || products.length === 0) {
        return <p>No products available.</p>;
    }
    return (
        <div className="flex flex-wrap my-3">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {displayedProducts.map((product) => (
                <div key={product.product_id}>
                    <Card
                        data={product}
                        favorite={isFavorite(product.product_id)}
                        onToggleFavorite={() => handleToggleFavorite(product)}
                        router={router}
                    />
                </div>
            ))}
        </div>
            <div className="w-full mt-[66px]">
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
