import { useState, useEffect } from "react";

function CatButton({ setCategories1 }) {
    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => res.json())
            .then((data) => setCategories(data.categories))
            .catch((error) => console.error("Error al obtener categorías:", error));
    }, []);

    return (
        <div className="relative w-64 mx-auto my-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-gray-600 text-white p-3 rounded-lg shadow-md"
            >
                {isOpen ? "Cerrar Categorías" : "Abrir Categorías"}
            </button>

            {isOpen && (
                <ul className="mt-2 border border-gray-300 rounded-lg bg-white max-h-80 overflow-y-auto shadow-lg">
                    {categories?.map((cat) => (
                        <div
                            key={cat.idCategory}
                            onClick={() => {
                                setCategories1(cat.strCategory)
                                setIsOpen(false)
                            }}
                            className="flex gap-3 items-start border rounded-lg p-3 bg-gray-400 hover:bg-gray-300 transition cursor-pointer"
                        >
                            <img
                                src={cat.strCategoryThumb}
                                alt={cat.strCategory}
                                className="w-16 h-16 rounded object-cover"
                            />
                            <div>
                                <h3 className="text-gray-800 font-bold">{cat.strCategory}</h3>
                                <p className="text-sm text-gray-800">
                                    {cat.strCategoryDescription.slice(0, 80)}...
                                </p>
                            </div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CatButton;
