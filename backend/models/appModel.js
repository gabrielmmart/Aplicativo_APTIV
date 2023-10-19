import mongoose from "mongoose"

const appSchema = mongoose.Schema({
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

export const AppModel = mongoose.model('App', appSchema)