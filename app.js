const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Usar rutas
app.use('/api/users', userRoutes);   // Rutas de usuarios
app.use('/api/products', productRoutes); // Rutas de productos

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
