import express from 'express';
import { Request, Response, NextFunction } from 'express';
import controller from '../controllers/controller';

const { getInfo, postInfo } = controller;
const apiRouter = express.Router();

apiRouter.get('/', getInfo, (req: Request, res: Response) => {
  res.status(200).json({ message: 'API router GET is working' });
});

apiRouter.post('/', postInfo, (req: Request, res: Response) => {
  res.status(200).json({ message: 'API router POST is working' });
});

export default apiRouter;
