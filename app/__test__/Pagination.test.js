import Pagination from '../Components/Main/Pagination';
import '@testing-library/jest-dom'
import React from 'react';
import { render, fireEvent } from '@testing-library/react';


describe('Pagination function', () => {
  it ('should be declared', () => {
      expect(typeof Pagination).toBe('function');
});

  it('renders pagination buttons correctly', () => {
   const onPageChangeMock = jest.fn();
   const totalPages = 5;
   const currentPage = 3;

    const { getAllByRole } = render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChangeMock}
      />
  );

  const buttons = getAllByRole('button');

  expect(buttons).toHaveLength(totalPages);
  expect(buttons[currentPage - 1]).toHaveClass('bg-gray-500 text-white');

  fireEvent.click(buttons[0]);
  expect(onPageChangeMock).toHaveBeenCalledWith(1);

  fireEvent.click(buttons[2]);
  expect(onPageChangeMock).toHaveBeenCalledWith(3);
});
});