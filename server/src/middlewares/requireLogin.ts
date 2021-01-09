import { Request, Response, NextFunction } from 'express';

const requireLogin = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(401).send({error: 'you must log in!'});
    }

    next();
};

export default requireLogin;