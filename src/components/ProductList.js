import React from 'react';
import Product from './Product';

function ProductList() {
    const data = [
        { name: "Shoyo Hinata", price: 3.49, id: 1 },
        { name: "Kotaro Bokuto", price: 2.49, id: 2 },
        { name: "Kenma Kozume", price: 2.49, id: 3 },
    ]
    return (
        <div>
            <h1>Stickers for Sale</h1>
            {
                data.map(product => (
                    <Product 
                        name={product.name}
                        price={product.price}
                        key={product.id}
                    />
                ))
            }
        </div>
    )
}

export default ProductList;
