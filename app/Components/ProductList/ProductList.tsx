import React, { useState, useEffect } from 'react';
import Card from '@/app/Card';
import { products } from '../Constants/products';
import { category, manufacturerName, brandName } from '../Constants/info.ts';
import Pagination from '../Main/Pagination';
import useProductList from '../Api/fetchProductData';

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
    };
    main_category: {
        category_id: string;
    };
}

interface ProductListProps {
    selectedCategories: string[];
    selectedBrands: string[];
}

const ITEMS_PER_PAGE = 8; // Number of items to display per page

const ProductList: React.FC<ProductListProps> = ({
    selectedCategories,
    selectedBrands,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        const filtered = products.filter((product) => {
            const price = product.recommended_prices.find(
                (price) => price.country === 'ES',
            );
            const categoryMatch =
                selectedCategories.length === 0 ||
                (product.main_category &&
                    selectedCategories.includes(
                        product.main_category.category_id,
                    ));

            const brandMatch =
                selectedBrands.length === 0 ||
                selectedBrands.includes(product.brand.brand_id);

            return (
                price &&
                price.amount !== undefined &&
                product.recommended_prices.length > 0 &&
                categoryMatch &&
                brandMatch
            );
        });

        setFilteredProducts(filtered as Product[]);
        setCurrentPage(1); // Reset to the first page when filters change
    }, [selectedCategories, selectedBrands]);

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const displayedProducts = filteredProducts.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex flex-wrap my-3">
            {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => {
                    const price = product.recommended_prices.find(
                        (price) => price.country === 'ES',
                    );
                    return (
                        <div
                            className="w-full sm:w-1/2 lg:w-1/4 p-2"
                            key={product.product_id}
                        >
                            <Card
                                id={product.product_id}
                                name={product?.name ?? ''}
                                country={price?.country}
                                price={price?.amount}
                                state={product.product_state}
                                brandId={product.brand.brand_id}
                                brandName={brandName[product.brand.brand_id]}
                                manufacturerId={
                                    product.manufacturer.manufacturer_id
                                }
                                manufacturerName={
                                    manufacturerName[
                                        product.manufacturer.manufacturer_id
                                    ]
                                }
                                favorite={false} // Set your favorite logic here
                                favoriteImg={''} // Set the favorite image URL if needed
                                productIndex={''} // Set the product index if needed
                                hasStock={product.has_stock}
                            />
                        </div>
                    );
                })
            ) : (
                <p>No products with prices available.</p>
            )}
            <div className=''>
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




// const ProductList = () => {
//   const apiUrl = 'https://graphql.stg.promofarma.com/graphql';
//   const pageSize = 14;

//   const products = useProductList(apiUrl, pageSize);

//   return (
//     <div>
//       <h1>Product List</h1>
//       {products.map((product) => (
//         <div>
//           <h2><b>Product Name:</b> {product.name}</h2>
//           <h2><b>Product ID:</b> {product.product_id}</h2>
//           <h2><b>Product updated_at:</b> {product.updated_at}</h2>
//           <h2><b>Product Has Stock:</b> {product.has_stock}</h2>
//           <h3><b>Product Brand:</b> {product.brand.name}</h3>
//           <h3><b>Product Brand ID:</b> {product.brand.brand_id}</h3>
//           <h3><b>Product State:</b> {product.product_state}</h3>
//           <h3><b>Product Categories:</b></h3>
//             <ul>
//               {Object.entries(product.manufacturer).map(([key, value]) => (
//                 <li key={key}>
//                   <strong>{key}: </strong>
//                   {value}
//                 </li>
//               ))}
//             </ul>
//           Main Category:
//           {product.main_category ? (
//             <ul>
//               {Object.entries(product.main_category).map(([key, value]) => (
//                 <li key={key}>
//                   <strong>{key}: </strong>
//                   {value}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No main category available.</p>
//           )}
//           Recommended Prices:
//           <ul>
//             {product.recommended_prices.map((price, index) => (
//               <li key={index}>
//                 <strong>Amount: </strong>
//                 {price.amount}
//                 <br />
//                 <strong>Currency: </strong>
//                 {price.currency}
//                 <br />
//                 <strong>Country: </strong>
//                 {price.country}
//               </li>
//             ))}
//           </ul>
//           <br />
//           {/* <h3><b>Product Category:</b> {product.category.name}</h3> */}
//           {/* <h3><b>Product Category:</b> {product.main_category.category_name}</h3> */}
    //   ))}
    // </div>