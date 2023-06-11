const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  imagen: {
    type: String,
  },
  distribuidor: {
    type: String,
    required: true,
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
