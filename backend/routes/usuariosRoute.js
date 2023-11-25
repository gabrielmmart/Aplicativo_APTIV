import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UsuarioModel } from '../models/usuarioModel.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      login,
      senha,
      nome,
      sobrenome,
      email,
      planta,
      acessoKPI,
      foto,
      admin,
      cargo
    } = req.body;

    // Validate required fields
    if (!login || !senha || !nome || !sobrenome || !email || !planta || !cargo || acessoKPI === undefined || admin === undefined || foto === undefined) {
      return res.status(400).json({
        message: 'Preencha todos os campos',
      });
    }

    // Check if the username already exists
    const existingUser = await UsuarioModel.findOne({ login });
    if (existingUser) {
      return res.status(400).json({ message: 'Login já existe' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Create a new user
    const newUser = await UsuarioModel.create({
      login,
      senha: hashedPassword,
      nome,
      sobrenome,
      email,
      planta,
      acessoKPI,
      foto,
      admin,
      cargo
    });

    res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { login, senha } = req.body;

    // Find the user by username
    const user = await UsuarioModel.findOne({ login });
    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    // Compare the entered password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(senha, user.senha);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Usuário ou senha inválido' });
    }

    // Check if the user is an admin
    if (user.admin) {
      // Generate a JWT token for admin
      const token = jwt.sign({ login: user.login, isAdmin: true }, 'ehosguri');
      res.status(200).json({ token, isAdmin: true });
    } else {
      // Generate a regular user JWT token
      const token = jwt.sign({ login: user.login, isAdmin: false }, 'ehosguri');
      res.status(200).json({ token, isAdmin: false });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});



// GET Todos usuarios
router.get('/', async (request, response) => {
  try {
    const usuarios = await UsuarioModel.find({});

    return response.status(200).json({
      count: usuarios.length,
      data: usuarios,
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

// GET Usuario especifico
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const usuario = await UsuarioModel.findById(id);

    if (!usuario) {
      return response.status(404).json({ message: 'Usuario not found' });
    }

    return response.status(200).json(usuario);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

// PUT Usuario especifico
router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const updatedUsuario = request.body;

    const result = await UsuarioModel.findByIdAndUpdate(id, updatedUsuario, { new: true });

    if (!result) {
      return response.status(404).json({ message: 'Usuario not found' });
    }

    return response.status(200).json({ message: 'Usuario updated successfully' });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

// DELETE usuario por ID
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await UsuarioModel.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Usuario not found' });
    }

    return response.status(200).json({ message: 'Usuario deleted successfully' });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

export default router;
