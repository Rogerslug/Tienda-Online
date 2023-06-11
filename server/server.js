const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);

console.log("Conectando a la base de datos en:", process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Conexión con MongoDB establecida');
});

app.listen(5000, () => {
  console.log('El servidor está corriendo en el puerto 5000');
});
