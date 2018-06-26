import { Request, Response, NextFunction, Router } from 'express';
import { CrudRouteInterface, HTTP_VERBS_MAP } from '../../../types';
import APIException from '../exceptions/ApiException';

const ERROR_MSG = 'Forbidden method';

export default abstract class CrudRoute implements CrudRouteInterface {

  abstract endpoint;
  abstract paramName;
  public middleware = new Array();

  public attachToRouter(router: Router): void {

    /**
     * If we have a named parameter in URL & handleParam is overridden
     */
    if (this.handleParam) {
      router.param(this.paramName, this.handleParam);
    }

    Object.keys(HTTP_VERBS_MAP).forEach((verb) => {
      router[verb](`${this.endpoint}/:${this.paramName}?`, [...this.middleware], this[verb]);
    });
  }

  public handleParam?(req, res: Response, next: NextFunction, value: any, name: string): any;

  public get?(req: Request, res: Response, next: NextFunction): any {
    throw new APIException(ERROR_MSG, 403);
  }

  public put?(req: Request, res: Response, next: NextFunction): any {
    throw new APIException(ERROR_MSG, 403);
  }

  public patch?(req: Request, res: Response, next: NextFunction): any {
    throw new APIException(ERROR_MSG, 403);
  }

  public post?(req: Request, res: Response, next: NextFunction): any {
    throw new APIException(ERROR_MSG, 403);
  }

  public delete?(req: Request, res: Response, next: NextFunction): any {
    throw new APIException(ERROR_MSG, 403);
  }
}
