import React, { useEffect, useState } from 'react';

function AllMeals() {
  const [meals, setMeals] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMeals() {
      const letras = 'abcdefg';
      let comidas = [];

      for (let letra of letras) {
        const respuesta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`);
        const datos = await respuesta.json();
        if (datos.meals) {
          comidas = comidas.concat(datos.meals);
        }
      }

      setMeals(comidas);
      setLoading(false);
    }

    getMeals();
  }, []);

  if (loading) {
    return <p>Cargando platos...</p>;
  }

  return (

    <div className='md:grid-cols-3  grid grid-cols-1 place-items-center pt-5'>
      {meals.map((comida) => (
        <div key={comida.idMeal}>
          <img className='w-[250px]  rounded-lg ' src={comida.strMealThumb} alt={comida.strMeal} width="200" />
           <h3 className='pb-5 w-[250px] '>{comida.strMeal}</h3>
        </div>
      ))}
    </div>
  );
}

export default AllMeals;
