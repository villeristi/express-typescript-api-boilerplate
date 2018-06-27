import { Response } from 'express';

import { BaseRouteInterface, httpVerbs } from '../../../types';
import BaseRoute from '../../common/classes/BaseRoute';
import { sampleMiddleware } from './middleware';

export default class Sample extends BaseRoute implements BaseRouteInterface {

  method: httpVerbs = 'GET';
  endpoint = '/sample';
  middleware = [sampleMiddleware];

  respond(req, res, next): Response {
    return res.json({ msg: 'Sample-endpoint' });
  }
}
