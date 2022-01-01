import { NextFunction, Request, Response } from "express";
import Crime from "../db/models/Crime";
import Criminal from "../db/models/Criminal";

const createCrime = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.criminalId || !req.body.crimeCommitted || !req.body.sanction)
        return res.status(400).json({ response: "Bad parameters !" });

    let existCriminal = await Criminal.findOne({ where: { id: req.body.criminalId } });

    if (!existCriminal)
        return res.status(404).json({ response: "Criminal not found !" });
    const crime = {
        criminalId: req.body.criminalId,
        crimeCommitted: req.body.crimeCommitted,
        sanction: req.body.sanction,
        description: req.body.description || "N/A",
        createdBy: res.locals.authData.id
    };

    Crime.create(crime).then(() => {
        return res.status(201).json({ response: "Crime added !" });
    }).catch(err => {
        console.error(err);
        return res.status(500).json({ response: "Internal error" });
    });
};

const getCrime = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id)
        return res.status(400).json({ response: "Please specify a id" });
    Crime.findOne({ where: { id: req.params.id } }).then((existCrime) => {
        if (!existCrime)
            return res.status(404).json({ response: "Crime not found !" });
        return res.status(200).json(existCrime);
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" });
    });
};

const getAllCrimes = async (req: Request, res: Response, next: NextFunction) => {
    Crime.findAll().then((Crimes) => {
        return res.status(200).json(Crimes);
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" })
    })
};

const updateCrime = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id)
        return res.status(400).json({ response: "Please specify a id" });
    if (!req.body.crimeCommitted || !req.body.sanction)
        return res.status(400).json({ response: "Bad parameters !" });

    let existCrime = await Crime.findOne({ where: { id: req.params.id } });

    if (!existCrime)
        return res.status(404).json({ response: "Crime not found !" });
    existCrime.crimeCommitted = req.body.crimeCommitted;
    existCrime.sanction = req.body.sanction;
    existCrime.description = req.body.description || existCrime.description;
    existCrime.save().then(() => {
        return res.status(200).json({ reponse: "Crime updated !" });
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" });
    })
};

const deleteCrime = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id)
        return res.status(400).json({ response: "Please specify a id" });
    Crime.findOne({ where: { id: req.params.id } }).then((existCrime) => {
        if (!existCrime)
            return res.status(404).json({ response: "Crime not found !" });
        existCrime.destroy().then(() => {
            return res.status(200).json({ response: "Crime deleted !" });
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
    createCrime,
    getCrime,
    getAllCrimes,
    updateCrime,
    deleteCrime
};