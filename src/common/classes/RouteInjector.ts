import { Router } from 'express';
import { debug } from '../util/debug';

export default class RouteInjector {
  private router;

  /**
   * RouteInjector constructor
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
    debug('Registered route: ', routeClass);
    routeClass.attachToRouter(this.router);
  }
}
