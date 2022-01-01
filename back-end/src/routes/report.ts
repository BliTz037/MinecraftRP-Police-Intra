import { Router } from "express";
import { createReport, getReport, getAllReports, updateReport, deleteReport } from "../controllers/report";
import { checkAuth } from "../middleware/auth";

const ReportRouter:Router = Router();

ReportRouter.post('/', checkAuth, createReport);
ReportRouter.get('/:id', checkAuth, getReport);
ReportRouter.get('/', checkAuth, getAllReports);
ReportRouter.put('/:id', checkAuth, updateReport);
ReportRouter.delete('/:id', checkAuth, deleteReport);

export default ReportRouter