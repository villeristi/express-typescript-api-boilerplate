import { Request, Response, NextFunction } from 'express';

export type httpVerbs = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';

export const HTTP_VERBS_MAP = {
  get: 'list',
  post: 'create',
  put: 'update',
  delete: 'delete',
  patch: 'patch',
};

export interface BaseRouteInterface {
  method: httpVerbs;
  endpoint: string;
  middleware?: Array<() => NextFunction>;
  respond: (req: Request, res: Response, next: NextFunction) => Response;
  attachToRouter: (Router) => void;
}

export interface CrudRouteInterface {
  endpoint: string;
  paramName: string;
  middleware?: Array<() => NextFunction>;
  get?: (req: Request, res: Response, next: NextFunction) => Response;
  post?: (req: Request, res: Response, next: NextFunction) => Response;
  put?: (req: Request, res: Response, next: NextFunction) => Response;
  patch?: (req: Request, res: Response, next: NextFunction) => Response;
  delete?: (req: Request, res: Response, next: NextFunction) => Response;

  handleParam?<T>(req: Request, res: Response, next: NextFunction, value: any, name: string): T;
}
