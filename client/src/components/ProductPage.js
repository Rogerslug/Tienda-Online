import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get('http://localhost:5000/products');
            setProducts(res.data);
        }
        fetchProducts();
    }, []);

    return (
        <main>
            <h2>Página de productos</h2>
            {products.map(product => (
                <div key={product._id}>
                    <h3>{product.nombre}</h3>
                    <p>{product.categoría}</p>
                </div>
            ))}
        </main>
    );
}

export default ProductPage;
