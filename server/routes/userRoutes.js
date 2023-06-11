const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Obtener todos los usuarios
router.get('/', async (res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un usuario por id
router.get('/:id', getUser, (res) => {
  res.json(res.user);
});

// Crear un usuario
router.post('/', async (req, res) => {
  const user = new User({
    nombre: req.body.nombre,
    email: req.body.email,
    contraseña: req.body.contraseña,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware
async function getUser(req, res, next) {
  let user;

  try {
    user = await User.findById(req.params.id);

    if (user == null) {
      return res.status(404).json({ message: 'No se pudo encontrar el usuario' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
