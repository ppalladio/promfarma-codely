import { FaHeart } from 'react-icons/fa';

interface ButtonFavProps {
    isFavorite: boolean;
    onToggle: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}
const ButtonFav: React.FC<ButtonFavProps> = ({ isFavorite, onToggle }) => {
    return (
        <FaHeart
            className={`favorite-icon ${
                isFavorite ? 'favorite-icon--active' : ''
            }`}
            onClick={onToggle}
        />
    );
};

export default ButtonFav;
