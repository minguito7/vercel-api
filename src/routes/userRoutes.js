const express = require('express');
const router = express.Router();

// Importar el controlador
const { getAllUsers, getUserById } = require('../controllers/userController');

// Definir rutas
router.get('/', getAllUsers); // Obtener todos los usuarios
router.get('/:id', getUserById); // Obtener un usuario por ID

module.exports = router;
