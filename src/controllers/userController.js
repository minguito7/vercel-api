// Obtener todos los usuarios
const getAllUsers = (req, res) => {
    res.json(users);
};

// Obtener un usuario por ID
const getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
};

module.exports = { getAllUsers, getUserById };