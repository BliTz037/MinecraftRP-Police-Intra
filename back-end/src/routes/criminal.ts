import { Router } from "express";
import { createCriminal, getCriminal, getAllCriminals, updateCriminal, deleteCriminal } from "../controllers/criminal";
import { checkAuth } from "../middleware/auth";

const CriminalRouter:Router = Router();

CriminalRouter.post('/', checkAuth, createCriminal);
CriminalRouter.get('/:id', checkAuth, getCriminal);
CriminalRouter.get('/', checkAuth, getAllCriminals);
CriminalRouter.put('/:id', checkAuth, updateCriminal);
CriminalRouter.delete('/:id', checkAuth, deleteCriminal);

export default CriminalRouter;