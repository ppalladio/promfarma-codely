import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
	const renderPagination = () => {
		const adjacentPages = 2;
		const totalAdjacentPages = adjacentPages * 2;
		const totalPageNumbers = totalAdjacentPages + 3; // 3 represents first page, last page, and ellipsis
	
		if (totalPages <= totalPageNumbers) {
		  // If total pages are less than or equal to the required page numbers, show all pages
		  return renderPageNumbers(1, totalPages);
		}
	
		const startPage = Math.max(1, currentPage - adjacentPages);
		const endPage = Math.min(currentPage + adjacentPages, totalPages);
	
		const pages: Array<number | string> = [];
	
		if (startPage > 1) {
		  pages.push(1);
		  if (startPage > 2) {
			pages.push('...');
		  }
		}
	
		for (let i = startPage; i <= endPage; i++) {
		  pages.push(i);
		}
	
		if (endPage < totalPages) {
		  if (endPage < totalPages - 1) {
			pages.push('...');
		  }
		  pages.push(totalPages);
		}
	
		return renderPageNumbers(pages);
	  };
	
	  const renderPageNumbers = (pages: Array<number | string>) => {
		return (
		  <div className="flex justify-center my-4 w-full mt-2">
			{currentPage > 1 && (
			  <button
				className="px-3 py-1 mx-1 rounded bg-gray-200"
				onClick={() => onPageChange(currentPage - 1)}
			  >
				Prev
			  </button>
			)}
	
			{pages.map((page, index) => (
			  <button
				key={index}
				className={`px-3 py-1 mx-1 rounded ${
				  page === currentPage ? 'bg-gray-400' : 'bg-gray-200'
				}`}
				onClick={() => onPageChange(typeof page === 'number' ? page : currentPage)}
			  >
				{page}
			  </button>
			))}
	
			{currentPage < totalPages && (
			  <button
				className="px-3 py-1 mx-1 rounded bg-gray-200"
				onClick={() => onPageChange(currentPage + 1)}
			  >
				Next
			  </button>
			)}
		  </div>
		);
	  };
	
	  return renderPagination();
	};
export default Pagination;
