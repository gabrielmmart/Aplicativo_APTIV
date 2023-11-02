import mongoose from "mongoose"

const usuarioSchema = mongoose.Schema({
  login:{ 
    type: String,
    required: true,
  },
  senha:{ 
    type: String,
    required: true,
  },
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
  cargo:{
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
  admin:{
    type: Boolean,
    required: true 
  }
}
);

export const UsuarioModel = mongoose.model('Usuario', usuarioSchema)