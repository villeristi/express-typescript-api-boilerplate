import { Response } from 'express';

import AbstractRoute from '../common/classes/BaseRoute';

export default class Toka extends AbstractRoute {

  method = 'GET';
  endpoint = '/toka';

  respond(req, res, next): Response {
    return res.json('Toka');
  }
}
