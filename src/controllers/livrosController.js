import livros from "../models/Livro.js";

class LivroController {
   static listarLivros = (req, res) => {
      livros
         .find()
         .populate("autor")
         .exec((err, livros) => {
            res.status(200).json(livros);
         });
   };

   static listaLivroPorId = (req, res) => {
      const { id } = req.params;
      livros
         .findById(id)
         .populate("autor", "nome")
         .exec((err, livros) => {
            if (err) {
               res.status(400).send({
                  message: `${err.message} - Id do livro não localizado`,
               });
            } else {
               res.status(201).json(livros);
            }
         });
   };

   static cadastrarLivro = (req, res) => {
      const livro = new livros(req.body);

      livro.save((err) => {
         if (err) {
            res.status(500).json({
               message: `${err.message} - falha ao cadastrar livro.`,
            });
         } else {
            res.status(201).json(livro);
         }
      });
   };

   static atualizarLivro = (req, res) => {
      const { id } = req.params;

      livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
         if (!err) {
            res.status(200).send({ message: "Livros atualizado com sucesso!" });
         } else {
            res.status(500).send({ message: err.message });
         }
      });
   };

   static excluirLivro = (req, res) => {
      const id = req.params;

      livros.findByIdAndDelete(id, (err) => {
         if (!err) {
            res.status(200).send({ message: "Livro removido com sucesso!" });
         } else {
            res.status(500).send({ message: err.message });
         }
      });
   };
}

export default LivroController;
