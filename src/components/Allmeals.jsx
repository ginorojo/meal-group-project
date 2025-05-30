import React, { useEffect, useState } from 'react';

function AllMeals({ searchTerm, categories, letter }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMeals() {
      setLoading(true)
      let url = '';

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


  if (loading) return <p className="text-center">Cargando platos...</p>;

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="md:grid-cols-3 grid grid-cols-1 place-items-center pt-5">
      {filteredMeals.length > 0 ? (
        filteredMeals.map((comida) => (
          <div key={comida.idMeal}>
            <img className="w-[250px] rounded-lg" src={comida.strMealThumb} alt={comida.strMeal} />
            <h3 className="pb-5 w-[250px]">{comida.strMeal}</h3>
          </div>
        ))
      ) : (
        <p className="text-center">No se encontraron platos.</p>
      )}
    </div>
  );
}

export default AllMeals;
