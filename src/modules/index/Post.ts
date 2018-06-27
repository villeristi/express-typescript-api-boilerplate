import { Response } from 'express';

import { BaseRouteInterface, httpVerbs } from '../../../types';
import BaseRoute from '../../common/classes/BaseRoute';

export default class Post extends BaseRoute implements BaseRouteInterface {

  method: httpVerbs = 'POST';
  endpoint = '/';

  respond(req, res, next): Response {
    return res.json({ msg: 'Index-route with POST-method' });
  }
}
