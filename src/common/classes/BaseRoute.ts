import { Request, Response, NextFunction, Router } from 'express';
import { BaseRouteInterface } from '../../types';

export default abstract class BaseRoute implements BaseRouteInterface {

  abstract method;
  abstract endpoint;
  public middleware = new Array();

  public attachToRouter(router: Router): void {
    router[this.method.toLowerCase()](this.endpoint, [...this.middleware], this.respond);
  }

  abstract respond(req: Request, res: Response, next: NextFunction): any;
}
