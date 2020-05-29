import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';



function App() {
    return (
      <div className="container">
        <h1>Sticker Seller</h1>
          <CartProvider>
            <ProductList />
            <Cart />
          </CartProvider>
      </div>
    )
  }

export default App;
