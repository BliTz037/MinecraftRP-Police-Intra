import { Router, Request, Response } from "express";
import AuthRouter from "./auth";

const router: Router = Router();

router.use('/user', AuthRouter);

export default router;