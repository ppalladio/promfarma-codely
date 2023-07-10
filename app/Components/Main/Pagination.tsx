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
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className=" flex justify-center w-full  mt-4">
            {totalPages > 1 && (
                <ul className="flex">
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
                </ul>
            )}
        </div>
    );
};

export default Pagination;
