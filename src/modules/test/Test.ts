import { Response } from 'express';

import BaseRoute from '../../common/classes/BaseRoute';
import { testMiddleware } from './middleware';

export default class Test extends BaseRoute {

  method = 'GET';
  endpoint = '/test';
  middleware = [testMiddleware];

  respond(req, res, next): Response {
    return res.json({ msg: 'Test' });
  }
}
