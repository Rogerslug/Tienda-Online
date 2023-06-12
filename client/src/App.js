import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import UserPage from './components/UserPage';
import FrontPage from './components/FrontPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/" element={<HomePage />} /> 
        <Route path="/fermented" element={<FrontPage />} /> {/* Esta es la ruta implementada de Luis */}
      </Routes>
    </Router>
  );
}

export default App;
