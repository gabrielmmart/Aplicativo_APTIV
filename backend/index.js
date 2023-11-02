import express from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from 'mongoose'
import atalhosRoute from './routes/atalhosRoute.js'
import usuariosRoute from './routes/usuariosRoute.js'
import cors from 'cors';

const app = express();

//middleware pra parsar request
app.use(express.json());

//middleware para gerenciamento de request
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders:['Content-Type']
}))

app.use('/Atalhos', atalhosRoute);

app.use('/Usuarios', usuariosRoute);

mongoose.connect(mongoDBURL).then(() => {
    
    console.log('App conectado a database');

    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`)
    })
})
.catch((error) => {
    console.log(error);
})

