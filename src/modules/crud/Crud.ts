import { Response, Request, NextFunction } from 'express';

import { CrudRouteInterface } from '../../../types';
import CrudRoute from '../../common/classes/CrudRoute';

export default class Crud extends CrudRoute implements CrudRouteInterface {

  endpoint = '/crud';
  paramName = 'id';

  /**
   * Do something when param appears in url
   * @param req
   * @param {e.Response} res
   * @param {e.NextFunction} next
   * @param value
   * @param {string} name
   * @returns {any}
   */
  handleParam(req: Request, res: Response, next: NextFunction, value: any, name: string): any {
    req.debug(`param-name: ${name}, param-value: ${value}`);
    return next();
  }

  get(req: Request, res: Response, next: NextFunction): Response {
    req.debug(req.params);
    return res.json({ msg: 'Crud GET' });
  }

  post(req: Request, res: Response, next: NextFunction): Response {
    return res.json({ msg: 'Crud POST' });
  }

  // If there's no PUT-method defined & PUT-request is coming to this route => an Exception is thrown
  // put(req: Request, res: Response, next: NextFunction): Response {
  //   return res.json({ msg: 'Crud PUT' });
  // }
}
