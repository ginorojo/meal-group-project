import React, { useState } from 'react';
import AllMeals from './components/Allmeals';
import Nav from './components/Nav';
import Buscador from './components/Buscador';

function App() {
  const [view, setView] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-[#292829] text-white min-h-screen font-sans">
      <Nav setView={setView} />
      <Buscador searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="p-6">
        {view === 'home' && (
          <>
            <h1 className="text-3xl font-bold mb-4 text-center">Comidas del Mundo</h1>
            <AllMeals searchTerm={searchTerm} />
          </>
        )}

        {view === 'about' && (
          <section className="text-center">
            <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
            <p className="text-white max-w-xl mx-auto">
              Este proyecto fue creado por Gino para compartir recetas deliciosas y simples.
              Usamos la API de TheMealDB para mostrar platos del mundo. ¡Explora y prueba nuevas comidas!
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
