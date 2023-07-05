import Image from 'next/image';
import Card from './Card';

export default function Home() {
    return (
        <div>
            <div className="capitalize"> promofarma</div>
            console.log("Hello, World!");
            <Card id="1" name="a" price="4" />
            <span>Yorgo Tests:</span>
        </div>
        
        
    );
}
