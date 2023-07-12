import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonFav from '../Components/ui/ButtonFav';
import "@testing-library/jest-dom/extend-expect";

describe('ButtonFav', () => {
  test('renders favorite icon with correct classes', () => {
    const { container } = render(
      <ButtonFav isFavorite={true} onToggle={jest.fn()} />
    );

    const favoriteIcon = container.querySelector('.favorite-icon');
    expect(favoriteIcon).toBeInTheDocument();
    expect(favoriteIcon).toHaveClass('favorite-icon--active');
  });

  test('calls onToggle handler when clicked', () => {
    const onToggleMock = jest.fn();
    const { container } = render(
      <ButtonFav isFavorite={false} onToggle={onToggleMock} />
    );

    const favoriteIcon = container.querySelector('.favorite-icon');
    fireEvent.click(favoriteIcon);
    expect(onToggleMock).toHaveBeenCalled();
  });
});
