import { Router } from "express";
import { postController } from "../controllers/post.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretariaOrEstudiante, postController.getPosts);
router.get("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretariaOrEstudiante, postController.getPostById);
router.post("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdmin, postController.createPost);
router.delete("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdmin, postController.deletePost);
router.put("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdmin, postController.updatePost);

export default router;