import { NextFunction, Request, Response } from "express";
import Criminal from "../db/models/Criminal";
import Report from "../db/models/Report";

const createReport = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.title || !req.body.text)
        return res.status(400).json({ response: "Bad parameters !" });
    if (req.body.criminalLink) {
        let existCriminal = await Criminal.findOne({ where: { id: req.body.criminalLink } });
        if (!existCriminal)
            return res.status(404).json({ response: "Criminal not found !" });
    }
    const report = {
        title: req.body.title,
        text: req.body.text,
        criminalLink: req.body.criminalLink || null,
        createdBy: res.locals.authData.id
    }
    Report.create(report).then(() => {
        return res.status(201).json({ response: "Report added !" });
    }).catch(err => {
        console.error(err);
        return res.status(500).json({ response: "Internal error" });
    });
};

const getReport = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id)
        return res.status(400).json({ response: "Please specify a id" });
    Report.findOne({ where: { id: req.params.id } }).then((existReport) => {
        if (!existReport)
            return res.status(404).json({ response: "Report not found !" });
        return res.status(200).json(existReport);
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" });
    });
};

const getAllReports = async (req: Request, res: Response, next: NextFunction) => {
    Report.findAll().then((Reports) => {
        return res.status(200).json(Reports);
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" })
    });
};

const updateReport = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id)
        return res.status(400).json({ response: "Please specify a id" });
    if (!req.body.title || !req.body.text)
        return res.status(400).json({ response: "Bad parameters !" });
    let existReport = await Report.findOne({ where: { id: req.params.id } });

    if (!existReport)
        return res.status(404).json({ response: "Report not found !" });

    if (req.body.criminalLink) {
        let existCriminal = await Criminal.findOne({ where: { id: req.body.criminalLink } });
        if (!existCriminal)
            return res.status(404).json({ response: "Criminal not found !" });
    }
    existReport.title = req.body.title;
    existReport.text = req.body.text;
    existReport.criminalLink = req.body.criminalLink || existReport.criminalLink
    existReport.save().then(() => {
        return res.status(200).json({ reponse: "Report updated !" });
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" });
    });
};

const deleteReport = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id)
        return res.status(400).json({ response: "Please specify a id" });
    Report.findOne({ where: { id: req.params.id } }).then((existReport) => {
        if (!existReport)
            return res.status(404).json({ response: "Report not found !" });
        existReport.destroy().then(() => {
            return res.status(200).json({ response: "Report deleted !" });
        }).catch((error) => {
            console.log(error);
            res.status(500).json({ response: "Internal error" });
        })
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" });
    });
};

export {
    createReport,
    getReport,
    getAllReports,
    updateReport,
    deleteReport
};