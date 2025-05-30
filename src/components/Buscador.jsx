import React from 'react';
import CatButton from './CatButton';

export default function Buscador({ searchTerm, setSearchTerm, setCategories }) {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', searchTerm);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative w-full max-w-md mx-auto mb-6 pt-5"
      role="search"
    >
      <div className="flex">
    <form onSubmit={handleSearch} className="relative w-full max-w-md mx-auto mb-6 pt-5">
      <div className="flex p-4 md:p-0">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Busca tu plato..."
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded-l border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 p-2.5"
          aria-label="Buscar plato"
          title="Buscar plato"
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-r hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Buscar
        </button>
      </div>
      <div >
        <CatButton
          setCategories1={setCategories}
        />
      </div>
    </form>
  );
}
