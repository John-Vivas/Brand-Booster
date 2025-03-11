import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {

        if (isIncart(item.id)) {
            totalQuantitySingleProduct(item, quantity)


        } else {
            setCart([...cart, { ...item, quantity }])

        }
    }
    const isIncart = (id) => cart.some((singleProduct) => singleProduct.id === id)

    const totalQuantitySingleProduct = (item, quantity) => {
        const updateProducts = cart.map((product) => {
            if (product.id === item.id) {
                const productUpdate = {
                    ...product, quantity: product.quantity + quantity
                }
                return productUpdate
            } else {
                return product
            }
        })
        setCart(updateProducts)
    }
    const totalQuatity = () => { }
    const totalPrice = () => { }
    const deleteOne = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };
    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, deleteOne, totalPrice, totalQuatity }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider

