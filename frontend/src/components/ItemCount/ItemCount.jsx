

import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)

    const suma = () => {
        count < stock && setCount(count + 1)
    }

    const resta = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div className="shadow-sm p-6 mb-4 max-w-xs mx-auto bg-white rounded-lg">
            <div className="mb-3">
                <h3 className="text-lg font-semibold">Cantidad: {count}</h3>
            </div>
            <div className="flex justify-between mb-3">
                <button
                    className="px-4 py-2 bg-gray-300 text-lg font-semibold text-gray-700 rounded-full hover:bg-gray-400"
                    onClick={resta}
                >
                    -
                </button>
                <button
                    className="px-4 py-2 bg-gray-300 text-lg font-semibold text-gray-700 rounded-full hover:bg-gray-400"
                    onClick={suma}
                >
                    +
                </button>
            </div>
            <button
                className="w-full py-2 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600"
                onClick={() => onAdd(count)}
            >
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount
