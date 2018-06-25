import { Request, Response, NextFunction, Router } from 'express';
import { CrudRouteInterface } from '../../../types';
// import APIException from '../exceptions/ApiException';

const METHODS = [
  'get',
  'post',
  'put',
  'delete',
];

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

    // router.get(`${this.endpoint}/:${this.paramName}?`, [...this.middleware], this.get);
  }

  public handleParam?(req, res: Response, next: NextFunction, value: any, name: string): any;

  // public get?(req: Request, res: Response, next: NextFunction): any {
  //   throw new APIException('Forbidden method', 403);
  // }
}
