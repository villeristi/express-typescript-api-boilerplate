import { Request, Response, NextFunction } from 'express';
import _debug from 'debug';

/**
 * Default debug-instance
 * @type {debug.IDebugger}
 */
export const debug = _debug('express-typescript:app');

/**
 * Inject debug to req.debug
 * @returns {(req: e.Request, res: e.Response, next: e.NextFunction) => void}
 */
export const debugMiddleware = () => (req: Request, res: Response, next: NextFunction): void => {
  req.debug = debug;
  next();
};
