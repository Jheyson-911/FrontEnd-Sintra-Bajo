import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";


const router = Router();

router.get("/", jwtMiddleware.verificarRolAdmin,userController.getUsers);
// router.get("/admin", userController.adminAccess);
// router.get("/secretaria", userController.secretaryAccess);
// router.get("/coordinador", userController.coordinatorAccess);
// router.delete("/:id", userController.deleteUser);
// router.post("/",userController.createUser);

export default router;
