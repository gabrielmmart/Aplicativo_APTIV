import mongoose from "mongoose"

const atalhoSchema = mongoose.Schema({

  nomeApp:{
    type: String,
    required: true,
  },
  link:{
    type: String,
    required: true 
  },  imgSrc:{ 
    type: String,
    required: true,
  }
}
);

export const AtalhoModel = mongoose.model('Atalho', atalhoSchema)