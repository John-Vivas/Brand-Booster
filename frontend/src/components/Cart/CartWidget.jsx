import { } from 'react'
import { ShoppingCart } from 'lucide-react'

const CartWidget = () => {
    return (
        <div className="relative ml-3 cursor-pointer text-white">
            <ShoppingCart />
            <div className="absolute top-0 right-0 transform translate-x-1/2 translate-y-[-50%] bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                { /* Aquí puedes colocar la cantidad del carrito */}
            </div>
        </div>
    )
}

export default CartWidget
