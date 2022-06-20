import editoras from "../models/Editora.js";

class EditoraController {
   static listarEditoras = (req, res) => {
      editoras.find((err, editoras) => {
         res.status(200).json(editoras);
      });
   };

   static listaEditoraPorId = (req, res) => {
      const { id } = req.params;
      editoras.findById(id, (err, editoras) => {
         if (err) {
            res.status(400).send({
               message: `${err.message} - Id do Editora não localizado`,
            });
         } else {
            res.status(201).json(editoras);
         }
      });
   };

   static cadastrarEditora = (req, res) => {
      const editora = new editoras(req.body);
      editora.save((err) => {
         if (err) {
            res.status(500).json({
               message: `${err.message} - falha ao cadastrar Editora.`,
            });
         } else {
            res.status(201).json(editora);
         }
      });
   };

   static atualizarEditora = (req, res) => {
      const { id } = req.params;

      editoras.findByIdAndUpdate(id, { $set: req.body }, (err) => {
         if (!err) {
            res.status(200).send({
               message: "editoras atualizado com sucesso!",
            });
         } else {
            res.status(500).send({ message: err.message });
         }
      });
   };

   static excluirEditora = (req, res) => {
      const id = req.params;

      editoras.findByIdAndDelete(id, (err) => {
         if (!err) {
            res.status(200).send({ message: "Editora removido com sucesso!" });
         } else {
            res.status(500).send({ message: err.message });
         }
      });
   };
}

export default EditoraController;
