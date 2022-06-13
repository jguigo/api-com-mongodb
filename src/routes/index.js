import express from "express";
import livros from "./livrosRoutes.js";

const routes = express.Router();

routes.get('/', (req, res) => {
   res.status(200).json({titulo: "Curso de node + express"})
})

routes.use(livros);

export default routes;