const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Obtener todos los productos
router.get('/', async (res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un producto por id
router.get('/:id', getProduct, (res) => {
  res.json(res.product);
});

// Crear un producto
router.post('/', async (req, res) => {
  const product = new Product({
    nombre: req.body.nombre,
    categoria: req.body.categoria,
    stock: req.body.stock,
    imagen: req.body.imagen,
    distribuidor: req.body.distribuidor,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware
async function getProduct(req, res, next) {
  let product;

  try {
    product = await Product.findById(req.params.id);

    if (product == null) {
      return res.status(404).json({ message: 'No se pudo encontrar el producto' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

module.exports = router;
