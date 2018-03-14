import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import httpStatus from 'http-status';

import APIException from '../exceptions/ApiException';

export const convertToApiException = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  if (!(err instanceof APIException)) {
    const apiError = new APIException(err.message, err.status, err.isPublic);
    return next(apiError);
  }

  return next(err);
};

export const exceptionHandler = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  return res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

export const errorRoute = (req: Request, res: Response, next: NextFunction) => {
  const err = new APIException('Not found', httpStatus.NOT_FOUND, true);
  return next(err);
};
