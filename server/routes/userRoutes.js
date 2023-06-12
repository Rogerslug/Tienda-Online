const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Obtener todos los usuarios
router.get('/', authenticateToken, async (res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un usuario por id
router.get('/:id', authenticateToken, getUser, (res) => {
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


// Inicio de sesión
router.post('/login', async (req, res) => {
    try {
        //Buscar usuario
        const user = await User.findOne({ username: req.body.username});
        if (!user) return res.status(400).json({ message: "Nombre de usuario o contraseña incorrectos"});

        //Comparar contraseñas
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json({ message: 'Nombre de usuario o contraseñas incorrectos'});

        // Crear y firmar un token
        const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, process.env.JTW_SECRET);

        // Enviar token
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Regiostrar un usuario
router.post('/', async (req, res) => {
    //Cifrado de contraseña
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        password: hashedPassword,
        isAdmin: req.body.isAdmin,
    });

    try {
        const newUser = await this.user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
});


// Middleware para buscar usuario
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

// Middleware para verificar token
function authenticateToken(req, res, next) {
    const authHeader = req.header['authorization'];
    const token = authHeader && authHeader.split('')[1];

    if (token == null) return res.sentStatus(401);

    jwt.verify(token, process.env.JTW_SECRET, (err, user) => {
        if (err) return res.sentStatus(403);
        req.user = user;
        next();
    });
}


module.exports = router;
