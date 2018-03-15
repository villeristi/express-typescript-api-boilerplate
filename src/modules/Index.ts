import { Response } from 'express';

import AbstractRoute from '../common/classes/BaseRoute';

export default class Index extends AbstractRoute {

  method = 'GET';
  endpoint = '/';

  respond(req, res, next): Response {
    return res.json({ msg: 'Index' });
  }
}
