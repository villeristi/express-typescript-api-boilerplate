import { Request, Response, NextFunction, Router } from 'express';

type httpVerbs = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';

export interface BaseRouteInterface {
  method: httpVerbs;
  endpoint: string;
  respond: (req: Request, res: Response, next: NextFunction) => Response;
  attachToRouter: (Router) => void;
}

export default abstract class AbstractRoute implements BaseRouteInterface {

  abstract method;
  abstract endpoint;

  public attachToRouter(router: Router): void {
    router[this.method.toLowerCase()](this.endpoint, this.respond);
  }

  abstract respond(req: Request, res: Response, next: NextFunction): any;
}
