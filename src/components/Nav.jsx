import React from 'react';

const Nav = ({ setView }) => {
  return (
    <nav className="flex items-center justify-between bg-[#364153] px-6 py-4 shadow-md h-[80px]">
      <h2 className="text-2xl font-bold text-white">Gino Cocina</h2>
      <ul className="flex gap-6">
        <li>
          <button
            onClick={() => setView('home')}
            className="text-white hover:text-blue-500 font-medium"
          >
            Inicio
          </button>
        </li>
        <li>
          <button
            onClick={() => setView('about')}
            className="text-white hover:text-blue-500 font-medium"
          >
            Acerca de
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
