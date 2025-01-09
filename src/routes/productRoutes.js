const express = require('express');
const router = express.Router();

// Importar el controlador
const { getAllProducts, getProductById } = require('../controllers/productController');

// Definir rutas
router.get('/', getAllProducts); // Obtener todos los productos
router.get('/:id', getProductById); // Obtener un producto por ID

module.exports = router;
