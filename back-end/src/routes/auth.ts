import { Router } from "express";
import { register, login } from "../controllers/auth";
import { checkAuthAdmin } from "../middleware/auth";

const AuthRouter:Router = Router();

AuthRouter.post('/register', checkAuthAdmin, register);
AuthRouter.post('/login', login);

export default AuthRouter;