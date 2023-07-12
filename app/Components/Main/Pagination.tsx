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
    const MAX_PAGES = 10;
    let startPage = Math.max(currentPage - Math.floor(MAX_PAGES / 2), 1);
    let endPage = Math.min(startPage + MAX_PAGES - 1, totalPages);

    if (endPage - startPage + 1 < MAX_PAGES && startPage > 1) {
        startPage = Math.max(endPage - MAX_PAGES + 1, 1);
    }

    const pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index,
    );

    const goToPreviousPage = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="flex justify-center w-full mt-19">
            {totalPages > 1 && (
                <ul className="flex">
                    <li>
                        <button
                            className={`px-3 py-1 mx-1 rounded ${
                                currentPage === 1
                                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-200 text-gray-700'
                            }`}
                            disabled={currentPage === 1}
                            onClick={goToPreviousPage}
                        >
                            Previous
                        </button>
                    </li>
                    {pages.map((page) => (
                        <li key={page}>
                            <button
                                className={`px-3 py-1 mx-1 rounded ${
                                    page === currentPage
                                        ? 'bg-gray-500 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                }`}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            className={`px-3 py-1 mx-1 rounded ${
                                currentPage === totalPages
                                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-200 text-gray-700'
                            }`}
                            disabled={currentPage === totalPages}
                            onClick={goToNextPage}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Pagination;
