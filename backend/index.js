import express from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from 'mongoose'
import { AppModel } from './models/appModel.js';
import appsRoute from './routes/appsRoute.js'

const app = express();

app.use(express.json());

app.use('/Apps', appsRoute);

mongoose.connect(mongoDBURL).then(() => {
    
    console.log('App conectado a database');

    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`)
    })
})
.catch((error) => {
    console.log(error);
})