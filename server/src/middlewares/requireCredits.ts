import { Request, Response, NextFunction } from 'express';

const requireCredits = (req: Request, res: Response, next: NextFunction) => {
    if (req.user!.credits < 1) {
        return res.status(403).send({error: 'Not enough credits!'});
    }

    next();
};

export default requireCredits;