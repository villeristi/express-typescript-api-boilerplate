import { Response } from 'express';

import BaseRoute from '../../common/classes/BaseRoute';

export default class Index extends BaseRoute {

  method = 'GET';
  endpoint = '/';

  respond(req, res, next): Response {
    return res.json({ msg: 'Index-route' });
  }
}
