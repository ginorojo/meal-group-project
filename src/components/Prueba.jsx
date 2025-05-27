import React, { useEffect, useState } from 'react';

function MealCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMealCategories() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data.meals);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMealCategories();
  }, []);

  if (loading) return <p>Cargando categorías...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Categorías de Comida</h2>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat.strCategory}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealCategories;
