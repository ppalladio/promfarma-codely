import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

interface ButtonFavProps {
  isFavorite: boolean;
  onToggle: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const ButtonFav: React.FC<ButtonFavProps> = ({ isFavorite, onToggle }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleToggle = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setFavorite(!favorite);
    onToggle(event);
  };

  return (
    <FaHeart
      className={`favorite-icon${favorite ? ' favorite-icon--active' : ''}`}
      onClick={handleToggle}
    />
  );
};

export default ButtonFav;
