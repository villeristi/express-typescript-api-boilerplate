import BaseRoute from '../common/classes/BaseRoute';

export default class Index extends BaseRoute {

  private method = 'GETS';
  private endpoint = '/';

  private respond(req, res, next) {
    res.json('Index');
  }
}
