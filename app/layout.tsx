import './globals.css';
import { Poppins } from 'next/font/google';
import ClientOnly from './Components/ClientOnly';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const font = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
    title: 'PromoFarma',
    description: 'Ofertas Rejabas | PromoFarma',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ClientOnly>
                    <Header /> 
                </ClientOnly>
                <div className="py-4">{children}</div>
				<Footer />
            </body>
        </html>
    );
}
