import express from 'express';
import { UsuarioModel } from '../models/usuarioModel.js'; // Correctly import UsuarioModel

const router = express.Router();

// POST route for creating a new usuario
router.post('/', async (request, response) => {
  try {
    const {
      nome,
      sobrenome,
      email,
      planta,
      acessoKPI,
      foto,
    } = request.body;

    if (!nome || !sobrenome || !email || !planta || acessoKPI === undefined || foto === undefined) {
      return response.status(400).json({
        message: 'Send all required fields: nome, sobrenome, email, planta, acessoKPI, foto',
      });
    }

    const newUsuario = await UsuarioModel.create({
      nome,
      sobrenome,
      email,
      planta,
      acessoKPI,
      foto,
    });

    return response.status(201).json(newUsuario);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

// GET route for retrieving all usuarios
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

// GET route for retrieving a specific usuario by ID
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

// PUT route for updating a specific usuario by ID
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

// DELETE route for deleting a specific usuario by ID
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
