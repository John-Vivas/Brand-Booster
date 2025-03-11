import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ item, stock, initial }) => {
    const [quantity, setQuantity] = useState(0)
    const { cart, addToCart } = useContext(CartContext)

    const onAdd = (quantityItem) => {
        setQuantity(quantityItem);
        addToCart(item, quantityItem);
    };
    console.log("ItemDetail props:", item, stock, initial);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            maxWidth: '100%',
            overflow: 'hidden',
        }}>
            <img
                src={item.image}
                alt={item.title}
                style={{
                    width: '750px',
                    height: '750px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    marginRight: '20px',
                }}
            />
            <div style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <h3 style={{
                    fontSize: '4.5rem',
                    fontWeight: '700',
                    marginBottom: '10px',
                    color: '#333',
                }}>
                    {item.title}
                </h3>
                <h4 style={{
                    fontSize: '3.8rem',
                    fontWeight: '500',
                    color: '#f39c12',
                    marginBottom: '10px',
                }}>
                    ${item.price}
                </h4>
                <p style={{
                    fontSize: '2rem',
                    color: 'black',
                    marginBottom: '10px',
                }}>
                    {item.description}
                </p>
            </div>


            <div style={{ color: 'black' }}>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>

        </div>


    )
}

export default ItemDetail
