import { NextFunction, Request, Response } from 'express'
import User from '../db/models/User';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

const register = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({response: "register controller"});
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.username || !req.body.password)
        return res.status(400).json({response: "Bad parameters"});
    
    let existUser = await User.findOne({where: {username: req.body.username}});

    if (!existUser)
        return res.status(403).json({response: "Wrong username/password"});
    bcrypt.compare(req.body.password, existUser.password, ((err, hashRes) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ response: "Internal error"});
        }
        if (!hashRes)
            return res.status(403).json({response: "Wrong username/password"});
        else {
            return res.status(200).json({
                token: sign({id: existUser?.id, username: existUser?.username, usernameGame: existUser?.usernameGame}, process.env.JSON_WEB_TOKEN || "")
            });
        }
    }))
};

export {
    register,
    login
};