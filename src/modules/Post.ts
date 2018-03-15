import { Response } from 'express';

import AbstractRoute from '../common/classes/BaseRoute';

export default class Post extends AbstractRoute {

  method = 'POST';
  endpoint = '/';

  respond(req, res, next): Response {
    return res.json({msg: 'Hallo from post!'});
  }
}
