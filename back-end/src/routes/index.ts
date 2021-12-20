import { Router, Request, Response } from "express";

const router: Router = Router();

router.use('*', async (req: Request, res: Response): Promise<Response> => {
    return res.status(404).send({ response: `API router OK !` });
})

export default router;