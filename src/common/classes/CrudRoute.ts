import { Response, NextFunction, Router } from 'express';
import { CrudRouteInterface } from '../../../types';
import APIException from '../exceptions/ApiException';

const HTTP_VERBS = [
  'get',
  'post',
  'put',
  'delete',
  'patch',
];

const ERROR_MSG = 'Not found';
const ERROR_STATUS = 404;

export default abstract class CrudRoute implements CrudRouteInterface {

  abstract endpoint;
  abstract paramName;
  public middleware = new Array();

  public attachToRouter(router: Router): void {

    /**
     * If we have a named parameter in URL & handleParam is overridden =>
     */
    if (this.handleParam) {
      router.param(this.paramName, this.handleParam);
    }

    HTTP_VERBS.forEach((verb) => {
      router[verb](`${this.endpoint}/:${this.paramName}?`, [...this.middleware], this[verb] || this.defaultResponse);
    });
  }

  /**
   * Handle param in url
   * @see https://expressjs.com/en/4x/api.html#router.param
   * @param req
   * @param {e.Response} res
   * @param {e.NextFunction} next
   * @param value
   * @param {string} name
   * @returns {any}
   */
  public handleParam?(req, res: Response, next: NextFunction, value: any, name: string): any;

  /**
   * If child-class has no method defined => throw ApiException
   */
  private defaultResponse() {
    throw new APIException(ERROR_MSG, ERROR_STATUS);
  }
}
