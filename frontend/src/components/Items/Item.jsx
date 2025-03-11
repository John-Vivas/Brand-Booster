
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, stock, category, image, onAdd }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 text-center w-full h-auto">
            <img
                src={image}
                alt={title}
                className="w-full h-100 object-contain rounded-lg mb-4"
            />
            <div className="space-y-3">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-blue-600 text-lg">${price}</p>
                <p className="text-gray-500 text-sm">Categoría: {category}</p>

                <div className="flex justify-between items-center mt-4">
                    <Link to={`/detail/${id}`}>
                        <button className="px-4 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
                            Ver Detalles
                        </button>
                    </Link>

                    <button
                        onClick={() => onAdd({ id, title, price, image, quantity: 1 })}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Item;

