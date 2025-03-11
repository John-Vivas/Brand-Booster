

import { useContext } from 'react';
import Item from '../Items/Item';
import { CartContext } from '../../context/CartContext';




const ItemList = ({ items }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full h-full overflow-auto px-4">
            {items.map(item => (
                <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    stock={item.stock}
                    category={item.category}
                    image={item.image}
                    {...item}
                    onAdd={addToCart}
                />
            ))}
        </div>
    );
};





export default ItemList;
