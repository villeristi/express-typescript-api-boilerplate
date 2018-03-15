import BaseRoute from '../common/classes/BaseRoute';

export default class Toka extends BaseRoute {

  private method = 'GET';
  private endpoint = '/toka';

  private respond(req, res, next) {
    res.json('Toka');
  }
}
