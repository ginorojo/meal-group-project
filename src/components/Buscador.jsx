import React from 'react';
import CatButton from './CatButton';

export default function Buscador({ searchTerm, setSearchTerm, setCategories }) {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md mx-auto mb-6 pt-5">
      <div className="flex p-4 md:p-0">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded-l border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 p-2.5"
          placeholder="🔍Busca tu plato..."
        />
      </div>
      <div >
        <CatButton
          setCategories1={setCategories}
        />
      </div>
    </form>
  );
}
