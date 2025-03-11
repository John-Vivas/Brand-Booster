
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CreditCard, ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, deleteOne, totalPrice, totalQuantity } = useContext(CartContext);

    return (
        <div className="my-10">
            <h2 className="text-2xl font-semibold mb-4">
                <ShoppingCart className="inline-block mr-2" />
                Carrito
            </h2>
            {cart.length === 0 ? (
                <div className="text-center p-10 border border-gray-300 rounded-lg">
                    <h5 className="text-lg font-medium">Tu carrito está vacío</h5>
                    <p>Agrega algunos productos para comenzar a comprar.</p>
                    <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <ul className="space-y-4">
                            {cart.map((item) => (
                                <li key={item.id} className="flex items-center space-x-4 py-4">
                                    <div className="w-1/4">
                                        <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full rounded" />
                                    </div>
                                    <div className="w-3/4">
                                        <h5 className="font-semibold">{item.title}</h5>
                                        <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                                        <p className="font-bold">US${item.price}</p>
                                        <button className="text-red-500 text-sm mt-2" onClick={() => deleteOne(item.id)}>
                                            <Trash2 size={16} className="inline-block mr-1" />
                                            Eliminar
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-4 text-sm text-gray-700 border border-gray-300 rounded px-4 py-2" onClick={clearCart}>
                            <Trash2 size={16} className="inline-block mr-2" />
                            Limpiar carrito
                        </button>
                    </div>
                    <div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h5 className="text-lg font-medium mb-4">Resumen del pedido</h5>
                            <ul className="space-y-2">
                                <li className="flex justify-between">
                                    <span>Subtotal ({totalQuantity} items)</span>
                                    <span>US${totalPrice}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Envío</span>
                                    <span>Gratis</span>
                                </li>
                                <li className="flex justify-between font-semibold">
                                    <span>Total</span>
                                    <span>US${totalPrice}</span>
                                </li>
                            </ul>
                            <button className="w-full mt-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500">
                                <CreditCard size={16} className="inline-block mr-2" />
                                Proceder al pago
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;