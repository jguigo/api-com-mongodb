import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = express.Router();

routes.get("/", (req, res) => {
   res.status(200).json({ titulo: "Curso de node + express" });
});

routes.use(livros);
routes.use(autores);

export default routes;
