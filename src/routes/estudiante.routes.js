import { Router } from "express";
import { estudianteController } from "../controllers/estudiante.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.getEstudiantes);
router.get("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrDocenteOrSecretaria, estudianteController.getEstudianteById);
router.post("/",jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.createEstudiante);
router.delete("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.deleteEstudiante);
router.put("/:id", jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria,estudianteController.updateEstudiante);
router.get("/:id/practicas",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.getPracticasByEstudiante);
router.get("/:id/documentos",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.getDocumentosByEstudiante);
router.get("/:id/solicitudes",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.getSolicitudesByEstudiante);

router.get("/practicas/completo",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.traerPracticasCompleto);

router.get("/:id/todo",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.traerPracticasCompletoById);
router.get("/:id/unico",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.traerPracticasUnicaCompletoById);
router.post("/buscar",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.buscarPorNombre);

router.post("/buscarcodigo",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.buscarPorCodigo);


// TODO: creando rutas para los reportes de estudiantes

router.get("/reportes/noiniciado",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.getReportByEstadoInicio);
router.get("/reportes/proceso",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.getReportByEstadoProceso);
router.get("/reportes/finalizado",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.getReportByEstadoFinalizado);
export default router;