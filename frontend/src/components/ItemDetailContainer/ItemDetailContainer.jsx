import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { itemsProducts } from '../mock/items'
const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { idProduct } = useParams()
    const idProductNumber = Number(idProduct)
    useEffect(() => {
        const getProduct = () => new Promise((resolve, reject) => {
            const uniqueProduct = itemsProducts.find(
                (itemsProd) => itemsProd.id === idProductNumber
            )
            resolve(uniqueProduct)
        })
        getProduct()
            .then((items) => setItem(items))
            .then(() => { })
    }, [idProductNumber])
    return (
        <div style={{ backgroundColor: 'red', minHeight: '70hv', color: 'white' }}>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer
