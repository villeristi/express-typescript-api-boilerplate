import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

import APIException from '../exceptions/ApiException';

/**
 * Convert exception to ApiException
 * @param err
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 */
export const convertToApiException = (err: any, req: Request, res: Response, next: NextFunction): void => {
  if (!(err instanceof APIException)) {
    const apiError = new APIException(err.message, err.status);
    return next(apiError);
  }

  return next(err);
};

/**
 * Exception-handler
 * @param {e.Error} err
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 * @returns {Response}
 */
export const exceptionHandler = (err: any, req: Request, res: Response, next: NextFunction): Response => {
  return res.status(err.status).json({
    message: err.message,
    status: httpStatus[err.status],
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

/**
 * 404-exception
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 */
export const notFoundException = (req: Request, res: Response, next: NextFunction): void => {
  const err = new APIException('Not found', httpStatus.NOT_FOUND);
  return next(err);
};
