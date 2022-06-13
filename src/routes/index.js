import express from "express";

const routes = express.Router();

const livros = [
   { id: 1, titulo: "O senhor dos Aneis" },
   { id: 2, titulo: "O Hobbit" },
];

routes.get("/", (req, res) => {
   res.status(200).send("curso de node com mongodb");
});
routes.get("/livros", (req, res) => {
   res.status(200).json(livros);
});
routes.get("/livros/:id", (req, res) => {
   let index = buscaLivro(req.params.id);
   res.json(livros[index]);
});
routes.post("/livros", (req, res) => {
   livros.push(req.body);
   res.status(201).send("livro foi cadastrado com sucesso");
});
routes.put("/livros/:id", (req, res) => {
   let index = buscaLivro(req.params.id);
   livros[index].titulo = req.body.titulo;
   res.json(livros);
});
routes.delete("/livros/:id", (req, res) => {
   const { id } = req.params;
   let index = buscaLivro(req.params.id);
   livros.splice(index, 1);
   res.send(`livro ${id} excluido com sucesso!`);
});

function buscaLivro(id) {
   return livros.findIndex((livro) => livro.id == id);
}

export { routes };
