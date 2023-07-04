import Image from 'next/image';
import Card from './Card';
import ProductList from './Components/ProductList/ProductList';

export default function Home() {
    return (
        <div>
            <div className="capitalize"> promofarma</div>
            <ProductList/>
        </div>
    );
}
