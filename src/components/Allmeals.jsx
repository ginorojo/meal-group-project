import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllMeals({ searchTerm, categories, letter }) {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMeals() {
      setLoading(true)
      let url = '';

      try {
        for (let letra of letras) {
          const respuesta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`);
          if (!respuesta.ok) throw new Error('Error al cargar los datos');
          const datos = await respuesta.json();
          if (datos.meals) {
            comidas = comidas.concat(datos.meals);
          }
        }
        setMeals(comidas);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
      if (searchTerm) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
      }
      else if (categories) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`;
      }
      else if (letter) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
      }
      else {
        const letras = 'abcdefgh'
        let comidas = []

        for (let letra of letras) {
          const respuesta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`);
          const datos = await respuesta.json();
          if (datos.meals) {
            comidas = comidas.concat(datos.meals)
          }
        }
        setMeals(comidas);
        setLoading(false);
        return;
      }

      try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        setMeals(datos.meals || [])
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setMeals([])
      }
      setLoading(false);
    }
    getMeals();
  }, [searchTerm, categories, letter])


  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center text-gray-600 py-10">Cargando platos...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <div id='menu' className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pt-6 pb-10">
    <div className="md:grid-cols-3 grid grid-cols-1 place-items-center pt-5">
      {filteredMeals.length > 0 ? (
        filteredMeals.map((comida) => (
          <Link
            to={`/meal/${comida.idMeal}`}
            key={comida.idMeal}
            className="text-center hover:scale-105 transition-transform"
          >
            <img
              src={comida.strMealThumb}
              alt={`Imagen de ${comida.strMeal}`}
              className="w-full max-w-[250px] mx-auto rounded-lg shadow-md"
            />
            <h3 className="mt-3 text-lg font-semibold text-white">{comida.strMeal}</h3>
          </Link>
        ))
      ) : (
        <p className="text-center col-span-full text-gray-600">No se encontraron platos.</p>
      )}
    </div>
  );
}

export default AllMeals;
