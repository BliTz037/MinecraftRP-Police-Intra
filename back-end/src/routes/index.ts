import { Router, Request, Response } from "express";
import AuthRouter from "./auth";
import CriminalRouter from "./criminal";

const router: Router = Router();

router.use('/user', AuthRouter);
router.use('/criminal', CriminalRouter);

export default router;