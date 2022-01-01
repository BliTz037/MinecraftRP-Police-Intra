import { Router, Request, Response } from "express";
import AuthRouter from "./auth";
import CrimeRouter from "./crime";
import CriminalRouter from "./criminal";
import ReportRouter from "./report";
import LawRouter from "./law";

const router: Router = Router();

router.use('/user', AuthRouter);
router.use('/criminal', CriminalRouter);
router.use('/crime', CrimeRouter);
router.use('/report', ReportRouter);
router.use('/law', LawRouter);

export default router;