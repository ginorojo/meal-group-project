import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MealDetail() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMeal() {
            try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (!res.ok) throw new Error('Error al cargar los datos');

                const data = await res.json();
                if (data.meals && data.meals.length > 0) {
                    setMeal(data.meals[0]);
                } else {
                    setError('Comida no encontrada.');
                }
            } catch (err) {
                setError(err.message);
            }
        }

        fetchMeal();
    }, [id]);

    if (error) return <p className="text-center text-red-600">{error}</p>;
    if (!meal) return <p className="text-center">Cargando detalle...</p>;

    return (
        <div className=" flex-col items-center flex bg-[#292829] pb-44">
            <div className='px-10 mx-auto p-4 bg-[#364153] rounded-2xl md:w-[80%] py-7 md:px-18'>
                <img
                    className="w-[400px] h-auto text-center rounded-lg mb-4 hover:scale-90"
                    src={meal.strMealThumb}
                    alt={`Imagen del plato ${meal.strMeal}`}
                /> <br />
                <h1 className="text-2xl text-center font-bold text-white mb-4">{meal.strMeal}</h1><br />
                <h2 className="text-xl font-semibold text-gray-400 mb-2">Instrucciones:</h2><br />
                <p className="text-white leading-relaxed whitespace-pre-line">{meal.strInstructions}</p>
            </div>
        </div>
    );
}

export default MealDetail;
