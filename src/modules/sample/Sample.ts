import { Response } from 'express';

import BaseRoute from '../../common/classes/BaseRoute';
import { sampleMiddleware } from './middleware';

export default class Sample extends BaseRoute {

  method = 'GET';
  endpoint = '/sample';
  middleware = [sampleMiddleware];

  respond(req, res, next): Response {
    return res.json({ msg: 'Sample-endpoint' });
  }
}
