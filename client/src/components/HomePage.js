import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        //Poner petición Api para buscar productos
    };

    return (
        <div className='homePage'>
            <h2>¡Bienvenido a nuestra tienda online!</h2>
            <p>Aquí puedes encontrar una gran variedad de productos a los mejores precios</p>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Busqueda para un producto"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type='submit'>Buscar</button>
            </form>
        </div>
    );
}

export default HomePage;
