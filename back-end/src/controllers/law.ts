import { NextFunction, Request, Response } from "express";
import Criminal from "../db/models/Criminal";
import Law from "../db/models/Law";

const createLaw = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.title || !req.body.penalSanction)
        return res.status(400).json({ response: "Bad parameters !" });
    const law = {
        title: req.body.title,
        penalSanction: req.body.penalSanction,
    };
    Law.create(law).then(() => {
        return res.status(201).json({ response: "Law added !" });
    }).catch(err => {
        console.error(err);
        return res.status(500).json({ response: "Internal error" });
    });
};

const getLaw = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id)
        return res.status(400).json({ response: "Please specify a id" });
    Law.findOne({ where: { id: req.params.id } }).then((existLaw) => {
        if (!existLaw)
            return res.status(404).json({ response: "Law not found !" });
        return res.status(200).json(existLaw);
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" });
    });
};

const getAllLaws = async (req: Request, res: Response, next: NextFunction) => {
    Law.findAll().then((Laws) => {
        return res.status(200).json(Laws);
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" })
    });
};

const updateLaw = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id)
        return res.status(400).json({ response: "Please specify a id" });
    if (!req.body.title || !req.body.penalSanction)
        return res.status(400).json({ response: "Bad parameters !" });
    let existLaw = await Law.findOne({ where: { id: req.params.id } });
    if (!existLaw)
        return res.status(404).json({ response: "Law not found !" });
    existLaw.title = req.body.title;
    existLaw.penalSanction = req.body.penalSanction;
    existLaw.save().then(() => {
        return res.status(200).json({ reponse: "Law updated !" });
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" });
    });
};

const deleteLaw = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id)
        return res.status(400).json({ response: "Please specify a id" });
    Law.findOne({ where: { id: req.params.id } }).then((existLaw) => {
        if (!existLaw)
            return res.status(404).json({ response: "Law not found !" });
        existLaw.destroy().then(() => {
            return res.status(200).json({ response: "Law deleted !" });
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
    createLaw,
    getLaw,
    getAllLaws,
    updateLaw,
    deleteLaw
};