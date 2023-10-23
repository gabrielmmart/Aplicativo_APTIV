import mongoose from "mongoose"

const atalhoSchema = mongoose.Schema({
  imgSrc:{ 
    type: String,
    required: true,
  },
  nomeApp:{
    type: String,
    required: true,
  },
  link:{
    type: String,
    required: true 
  }
}
);

export const AtalhoModel = mongoose.model('Atalho', atalhoSchema)