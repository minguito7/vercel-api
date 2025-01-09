const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Rutas
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Hola, mundo desde Vercel!');
});

// Exportar handler para Vercel
module.exports = app;

// Iniciar servidor localmente si no está en un entorno de servidor (como Vercel)
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}
