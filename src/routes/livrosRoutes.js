import express from "express";
import LivroController from "../controllers/livrosController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.listaLivroPorId);
routes.get("/livros/busca", LivroController.listarLivroPorEditora);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:_id", LivroController.excluirLivro);

export default routes;
