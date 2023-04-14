import { Request, Response, NextFunction } from 'express';

const controller = {
  getInfo: async (req: Request, res: Response, next: NextFunction) => {
    // GET some data from the database
  },

  postInfo: async (req: Request, res: Response, next: NextFunction) => {
    // POST some data to the database
  },
};

export default controller;
