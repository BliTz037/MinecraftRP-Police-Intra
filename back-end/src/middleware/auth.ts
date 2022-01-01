import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import User from "../db/models/User";

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization)
        return res.status(403).json({response: "No token, authorization denied"});
    const token = req.headers.authorization.split(' ')[1];
    verify(token, process.env.JSON_WEB_TOKEN || "", async (err, authData) => {
        if (err)
            return res.status(403).json({ response: "Wrong token !"});
        console.log(authData);
        let existUser = await User.findOne({ where: { id: authData!.id  , username: authData!.username } });
        if (!existUser)
            return res.status(403).json({ response: "Token expired !"});
        res.locals["authData"] = authData;
        next();
    });
}

const checkAuthAdmin = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization)
        return res.status(403).json({response: "No token, authorization denied"});
    const token = req.headers.authorization.split(' ')[1];
    verify(token, process.env.JSON_WEB_TOKEN || "", async (err, authData) => {
        if (err)
            return res.status(403).json({ response: "Wrong token !"});
        console.log(authData);
        let existUser = await User.findOne({ where: { id: authData!.id  , username: authData!.username, isAdmin: true } });
        if (!existUser)
            return res.status(403).json({ response: "Token expired or you don't have permission to do this !"});
        next();
    });
}

export {
    checkAuth,
    checkAuthAdmin
};