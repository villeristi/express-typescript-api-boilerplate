import { Response } from 'express';

import BaseRoute from '../../common/classes/BaseRoute';

export default class Post extends BaseRoute {

  method = 'POST';
  endpoint = '/';

  respond(req, res, next): Response {
    return res.json({ msg: 'Index-route with POST-method' });
  }
}
