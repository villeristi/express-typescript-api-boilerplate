import { Request, Response, NextFunction, Router } from 'express';

type httpVerbs = 'GET'|'POST'|'PUT'|'PATCH'|'DELETE'|'OPTIONS';

export interface BaseRouteInterface {
  method: httpVerbs;
  endpoint: string;
  respond: () => Response;
}

export default abstract class BaseRoute<BaseRouteInterface> {

  abstract method;
  abstract endpoint;

  public attachToRouter(router: Router) {
    router[this.method.toLowerCase()](this.endpoint, this.respond);
  }

  abstract respond(req: Request, res: Response, next: NextFunction);
}
