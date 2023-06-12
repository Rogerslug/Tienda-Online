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
        setProducts(res.data);
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
        {products.map((product, index) => (
            <div key={index} className='product'>
                <img src={product.imagen} alt={product.nombre} />
                <h2>{product.imagen}</h2>
                <p className="product-category">Categoría: {product.categoria}</p>
                <p>Stock: {product.stock}</p>
                <p>Distribuidor: {product.distribuidor}</p>
                <button onClick={() => add(product, product.precio)}>Añadir al carrito</button>                
            </div>
        ))}
      </div>
    </div>
  );
}

export default FrontPage;
