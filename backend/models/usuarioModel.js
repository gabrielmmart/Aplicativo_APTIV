import mongoose from "mongoose"

const usuarioSchema = mongoose.Schema({
  nome:{ 
    type: String,
    required: true,
  },
  sobrenome:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true 
  },
  planta:{
    type: String,
    required: true 
  },
  acessoKPI:{
    type: Boolean,
    required: true 
  },
  foto:{
    type: String,
    required: true 
  },
}
);

export const UsuarioModel = mongoose.model('Usuario', usuarioSchema)