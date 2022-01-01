import { Router, Request, Response } from "express";
import AuthRouter from "./auth";
import CrimeRouter from "./crime";
import CriminalRouter from "./criminal";

const router: Router = Router();

router.use('/user', AuthRouter);
router.use('/criminal', CriminalRouter);
router.use('/crime', CrimeRouter);

export default router;