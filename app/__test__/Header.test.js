import { render, screen } from '@testing-library/react'
import Header from '../Components/Header/Header'
import '@testing-library/jest-dom'
 
describe('Header', () => {
  test('renders the name page and buttons correctly', () => {
    const renderedComponent = render(<Header />);
    
    const namePageElement = renderedComponent.getByText('PromoFarma');
    expect(namePageElement).toBeInTheDocument();

    const favoritesButton = renderedComponent.getByText('Favorites');
    expect(favoritesButton).toBeInTheDocument();

    const aboutUsButton = renderedComponent.getByText('About us');
    expect(aboutUsButton).toBeInTheDocument();
  });
});