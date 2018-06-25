import { NextFunction, Request, Response } from 'express';

/**
 * Sample middleware for `/sample`-route
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 */
export const sampleMiddleware = (req: Request, res: Response, next: NextFunction) => {
  req.debug(`Hallo from route-specific middleware, route: ${req.method} ${req.originalUrl}`);
  return next();
};
