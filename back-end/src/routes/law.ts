import { Router } from "express";
import { createLaw, getLaw, getAllLaws, updateLaw, deleteLaw } from "../controllers/law";
import { checkAuth, checkAuthAdmin } from "../middleware/auth";

const LawRouter:Router = Router();

LawRouter.post('/', checkAuthAdmin, createLaw);
LawRouter.get('/:id', checkAuth, getLaw);
LawRouter.get('/', checkAuth, getAllLaws);
LawRouter.put('/:id', checkAuthAdmin, updateLaw);
LawRouter.delete('/:id', checkAuthAdmin, deleteLaw);

export default LawRouter