import { NextFunction, Request, Response } from 'express';

/**
 * Test middleware for `/test`-route
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 */
export const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
  req.debug(`Hallo from middleware, route: ${req.method} ${req.originalUrl}`);
  return next();
};
