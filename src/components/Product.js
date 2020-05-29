import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


function Product(props) {
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        const product = {name: props.name, price: props.price};
        setCart(curr => [...curr, product]);
    }
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.price}</h2>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;
