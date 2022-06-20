import autores from "../models/Autor.js";

class AutorController {
   static listarautores = (req, res) => {
      autores.find((err, autores) => {
         res.status(200).json(autores);
      });
   };

   static listaAutorPorId = (req, res) => {
      const { id } = req.params;
      autores.findById(id, (err, autores) => {
         if (err) {
            res.status(400).send({
               message: `${err.message} - Id do Autor não localizado`,
            });
         } else {
            res.status(201).json(autores);
         }
      });
   };

   static cadastrarAutor = (req, res) => {
      const autor = new autores(req.body);

      autor.save((err) => {
         if (err) {
            res.status(500).json({
               message: `${err.message} - falha ao cadastrar Autor.`,
            });
         } else {
            res.status(201).json(autor);
         }
      });
   };

   static atualizarAutor = (req, res) => {
      const { id } = req.params;

      autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
         if (!err) {
            res.status(200).send({ message: "autores atualizado com sucesso!" });
         } else {
            res.status(500).send({ message: err.message });
         }
      });
   };

   static excluirAutor = (req, res) => {
      const id = req.params;

      autores.findByIdAndDelete(id, (err) => {
         if (!err) {
            res.status(200).send({ message: "Autor removido com sucesso!" });
         } else {
            res.status(500).send({ message: err.message });
         }
      });
   };
}

export default AutorController;
