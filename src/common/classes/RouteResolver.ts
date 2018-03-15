import { Router } from 'express';
import debug from '../util/debug';

export default class RouteResolver {
  private router;

  /**
   * RouteResolver constructor
   * @param {e.Router} router
   */
  constructor(router: Router) {
    this.router = router;
  }

  /**
   * Attach routes to router
   * @param route
   */
  public add(route: any): void {
    const routeClass = new route();
    debug('Route-class: ', routeClass);
    routeClass.attachToRouter(this.router);
  }
}
