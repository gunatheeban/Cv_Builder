import React, { useContext } from 'react';
import { PaginationContext } from '../cv_generator';

export default function Editor() {
  const { page, setPage } = useContext(PaginationContext);

  const pages = [
    'Personal Info',
    'Experience',
    'Education',
    'Skills',
    'Projects',
    'Additional'
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex border-b">
        {pages.map((pageTitle, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={`px-4 py-2 text-sm font-medium ${
              page === index
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {pageTitle}
          </button>
        ))}
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{pages[page]}</h3>
          <p className="text-gray-600">
            Editor content for {pages[page]} will be implemented here.
          </p>
        </div>
      </div>
    </div>
  );
}