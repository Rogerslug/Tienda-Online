import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FrontPage.css'; 

function FrontPage() {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    const add = (product, price) => {
        setProducts([...products, product]);
        setTotal(total + price);
    };

    const getProducts = async () => {
        const res = await axios.get('http://localhost:5000/products');
        //Colocar aquí lógica para mostrar productos en página
    };

useEffect(() => {
    getProducts();
}, []);

  return (
    <div className="container">
      <header>
        <h1>Tienda de productos fermentados</h1>
        <button id="checkout" onClick={() => console.log('Implementar la función de pago')}>Pagar</button>
      </header>
      <div id="page-content">
        {/* Aquí necesitas implementar la función para mostrar los productos */}
      </div>
    </div>
  );
}

export default FrontPage;
