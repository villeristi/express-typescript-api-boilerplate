import { Router } from 'express';
import { BaseRouteInterface } from './BaseRoute';
import debug from '../util/debug';

export default class RouteResolver {
  private routes: BaseRouteInterface[] = [];
  private router;

  public add(route: any) {
    this.routes.push(new route());
  }

  /**
   * Attach routes to router
   * @param {e.Router} router
   */
  public addToRouter(router: Router): void {
    this.router = router;
    this.routes.forEach((routeClass: any) => {
      debug('Route-class: ', routeClass);
      routeClass.attachToRouter(this.router);
    });
  }
}
