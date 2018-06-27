import { Response } from 'express';

import { BaseRouteInterface, httpVerbs } from '../../../types';
import BaseRoute from '../../common/classes/BaseRoute';

export default class Index extends BaseRoute implements BaseRouteInterface {

  method: httpVerbs = 'GET';
  endpoint = '/';

  respond(req, res, next): Response {
    return res.json({ msg: 'Index-route' });
  }
}
