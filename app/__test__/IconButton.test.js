import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import IconButton from '../Components/ui/IconButton';
import "@testing-library/jest-dom/extend-expect";

describe('IconButton', () => {
  test('renders button with correct icon', () => {
    const mockIcon = <svg data-testid="test-icon" />;
    const { getByTestId } = render(<IconButton icon={mockIcon} />);
    const icon = getByTestId('test-icon');
    expect(icon).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { container } = render(<IconButton onClick={onClickMock} />);
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  test('applies additional className to button', () => {
    const { container } = render(<IconButton className="custom-class" />);
    const button = container.querySelector('button');
    expect(button).toHaveClass('custom-class');
  });
});
