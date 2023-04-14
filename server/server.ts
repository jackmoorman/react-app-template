import express from 'express';
import { Request, Response, NextFunction } from 'express';
//@ts-expect-error
import * as dotenv from 'dotenv';
dotenv.config();
import apiRouter from './routers/apiRouter';
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

type ServerError = {
  err: Error;
};

app.use('/api', (req: Request, res: Response) => {
  res.status(200).json({ message: 'API router GET is working' });
});

app.use('*', (req: Request, res: Response) => {
  res.status(404).send('404 Not Found');
});

app.use(
  '/',
  (err: ServerError, req: Request, res: Response, next: NextFunction) => {
    const defaultError = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const ErrorObj = Object.assign(defaultError, err);
    return res.status(ErrorObj.status).json(ErrorObj.message);
  }
);

app.listen(3000, () => console.log(`Server is listening on port ${PORT}`));
