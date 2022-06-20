import express from "express";
import EditoraController from "../controllers/editoraController.js";

const routes = express.Router();

routes.get("/editora", EditoraController.listarEditoras);
routes.get("/editora/:id", EditoraController.listaEditoraPorId);
routes.post("/editora", EditoraController.cadastrarEditora);
routes.put("/editora/:id", EditoraController.atualizarEditora);
routes.delete("/editora/:_id", EditoraController.excluirEditora);

export default routes;
