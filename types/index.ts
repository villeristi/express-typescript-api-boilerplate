import { Request, Response, NextFunction } from 'express';

export type httpVerbs = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';

export interface BaseRouteInterface {
  method: httpVerbs;
  endpoint: string;
  middlewares?: Array<() => NextFunction>;
  respond: (req: Request, res: Response, next: NextFunction) => Response;
  attachToRouter: (Router) => void;
}
