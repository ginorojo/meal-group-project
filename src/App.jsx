import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllMeals from './components/Allmeals';
import MealDetail from './components/MealDetail';
import Nav from './components/Nav';
import Buscador from './components/Buscador';

function Home({ searchTerm, setSearchTerm }) {
  return (
    <>
      <Buscador searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h1 className="text-3xl font-bold mb-4 text-center">Comidas del Mundo</h1>
      <AllMeals searchTerm={searchTerm} />
    </>
  );
}

function About() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
      <p className="text-white max-w-xl mx-auto">
        Este proyecto fue creado por Gino para compartir recetas deliciosas y simples.
        Usamos la API de TheMealDB para mostrar platos del mundo. ¡Explora y prueba nuevas comidas!
      </p>
    </section>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="bg-[#292829] text-white min-h-screen font-sans">
        <Nav />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
              <Route path="/meal/:id" element={<MealDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
