import Image from 'next/image';
import Card from './Card';
import ProductList from './Components/ProductList/ProductList';
import BrandList from './Components/BrandList/BrandList';

export default function Home() {
    return (
        <div>
            <div className="capitalize">promofarma</div>
            {/* <ProductList/> */}
            <BrandList/>
        </div>
    );
}
