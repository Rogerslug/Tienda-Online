import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Tienda Online</h1>
            <nav>
                <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/users">Usuarios</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
