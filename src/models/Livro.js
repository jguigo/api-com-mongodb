import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
   {
      id: {
         type: String
      },
      titulo: {
         type: String,
         required: true
      },
      autor: {
         type: String,
         required:true
      },
      editora: {
         type: String,
         required:true
      },
      numeroPaginas: {
         type: Number
      }
   }
)

//o primeiro parâmetro representa a coleção no db, se não tivesse sido criado, ele iria criar uma coleção sozinho!
const livros = mongoose.model('livros', livroSchema) 

export default livros;