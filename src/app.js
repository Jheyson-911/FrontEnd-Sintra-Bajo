import express from "express";
import cors from "cors";

// ?IMPORTANDO LAS RUTAS DE LOS CONTROLADORES
import ContenidoItemRoutes from "./routes/contenidoItem.routes.js";
import DocenteRoutes from "./routes/docente.routes.js";
import DocumentoRoutes from "./routes/documento.routes.js";
import EmpresaRoutes from "./routes/empresa.routes.js";
import EstudianteRoutes from "./routes/estudiante.routes.js";
import EvaluacionRoutes from "./routes/evaluacion.routes.js";
import ItemRoutes from "./routes/item.routes.js";
import PostRoutes from "./routes/post.routes.js";
import PracticaRoutes from "./routes/practica.routes.js";
import RepresentanteRoutes from "./routes/representante.routes.js";
import SolicitudRoutes from "./routes/solicitud.routes.js";
import UsuarioRoutes from "./routes/user.routes.js";
// import RoleRoutes from "./routes/role.routes.js";
import AuthRoutes from "./routes/auth.routes.js";
import ConveniosRoutes from "./routes/convenios.routes.js";

const app = express();

// ?MIDDLEWARE
app.use(express.json());
app.use(cors());

// TODO:RUTA PRINCIPAL

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ?RUTAS DE LAS APIS

app.use("/api/contenidoItem", ContenidoItemRoutes);
app.use("/api/docente", DocenteRoutes);
app.use("/api/documento", DocumentoRoutes);
app.use("/api/empresa", EmpresaRoutes);
app.use("/api/estudiante", EstudianteRoutes);
app.use("/api/evaluacion", EvaluacionRoutes);
app.use("/api/item", ItemRoutes);
app.use("/api/post", PostRoutes);
app.use("/api/practica", PracticaRoutes);
app.use("/api/representante", RepresentanteRoutes);
app.use("/api/solicitud", SolicitudRoutes);
app.use("/api/usuario", UsuarioRoutes);
// app.use("/api/role", RoleRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/convenios", ConveniosRoutes);

export default app;
