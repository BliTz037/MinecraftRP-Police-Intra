import { Router } from "express";
import { createCrime, getCrime, getAllCrimes, updateCrime, deleteCrime } from "../controllers/crime";
import { checkAuth } from "../middleware/auth";

const CrimeRouter:Router = Router();

CrimeRouter.post('/', checkAuth, createCrime);
CrimeRouter.get('/:id', checkAuth, getCrime);
CrimeRouter.get('/', checkAuth, getAllCrimes);
CrimeRouter.put('/:id', checkAuth, updateCrime);
CrimeRouter.delete('/:id', checkAuth, deleteCrime);

export default CrimeRouter