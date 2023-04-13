import express from 'express';
import { Request, Response, NextFunction } from 'express';
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

type ServerError = {
  err: Error;
};

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
