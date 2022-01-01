import { NextFunction, Request, Response } from "express";
import Criminal from "../db/models/Criminal";

const createCriminal = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.birthday ||
        !req.body.sexe || !req.body.usernameGame)
        return res.status(400).json({ response: "Bad parameters !" });

    let existCriminal = await Criminal.findOne({ where: { firstName: req.body.firstName, lastName: req.body.lastName, usernameGame: req.body.usernameGame, } });

    if (existCriminal)
        return res.status(400).json({ response: "Criminal already exists !" });
    const criminal = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.birthday,
        sexe: req.body.sexe,
        physicalDescription: req.body.physicalDescription || "N/A",
        usernameGame: req.body.usernameGame
    };

    Criminal.create(criminal).then(data => {
        return res.status(201).json({ response: "Criminal added !" });
    }).catch(err => {
        console.error(err);
        return res.status(500).json({ response: "Internal error" });
    });
};

const getCriminal = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id)
        return res.status(400).json({ response: "Please specify a id" });
    Criminal.findOne({ where: { id: req.params.id } }).then((existCriminal) => {
        if (!existCriminal)
            return res.status(404).json({ response: "Criminal not found !" });
        return res.status(200).json(existCriminal);
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" });
    });
};

const getAllCriminals = async (req: Request, res: Response, next: NextFunction) => {
    Criminal.findAll().then((Criminals) => {
        return res.status(200).json(Criminals);
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" });
    });
};

const updateCriminal = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id)
        return res.status(400).json({ response: "Please specify a id" });
    if (!req.body.firstName || !req.body.lastName || !req.body.birthday ||
        !req.body.sexe || !req.body.usernameGame)
        return res.status(400).json({ response: "Bad parameters !" });

    let existCriminal = await Criminal.findOne({ where: { id: req.params.id } });

    if (!existCriminal)
        return res.status(404).json({ response: "Criminal not found !" });
    existCriminal.firstName = req.body.firstName;
    existCriminal.lastName = req.body.lastName;
    existCriminal.lastName = req.body.birthday;
    existCriminal.sexe = req.body.sexe;
    existCriminal.usernameGame = req.body.usernameGame;
    existCriminal.physicalDescription = req.body.physicalDescription || existCriminal.usernameGame;
    existCriminal.save().then(() => {
        return res.status(200).json({ response: "Criminal updated !" });
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" });
    })
};

const deleteCriminal = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id)
        return res.status(400).json({ response: "Please specify a id" });
    Criminal.findOne({ where: { id: req.params.id } }).then((existCriminal) => {
        if (!existCriminal)
            return res.status(404).json({ response: "Criminal not found !" });
        existCriminal.destroy().then(() => {
            return res.status(200).json({ response: "Criminal deleted !" });
        }).catch((error) => {
            console.error(error);
            return res.status(500).json({ response: "Internal error" });
        })
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({ response: "Internal error" });
    });
};

export {
    createCriminal,
    getCriminal,
    getAllCriminals,
    updateCriminal,
    deleteCriminal
};