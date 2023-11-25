// Import the required modules
import express from 'express';
import mongoose from 'mongoose';
import atalhosRoute from './routes/atalhosRoute.js';
import usuariosRoute from './routes/usuariosRoute.js';
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';

const app = express();

// Middleware to parse requests
app.use(express.json());

// CORS middleware for managing requests
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

// Routes
app.use('/Atalhos', atalhosRoute);
app.use('/Usuarios', usuariosRoute);

// Connect to MongoDB
mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('App connected to the database');

    // Start the server
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
