import express from "express";
import AutorController from "../controllers/autoresController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarautores);
routes.get("/autores/:id", AutorController.listaAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:_id", AutorController.excluirAutor);

export default routes;
