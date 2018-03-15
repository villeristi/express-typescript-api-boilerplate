import Express, { Application, Router } from 'express';
import dotenv from 'dotenv';

import RouteResolver from './common/classes/RouteResolver';
import debug from './common/util/debug';
import { convertToApiException, exceptionHandler, errorRoute } from './common/util/exceptionHandlers';

export default class App {

  private router: Router;
  private routeResolver: RouteResolver;
  private port: number = Number(process.env.PORT) || 3000;
  private app: Application;
  private configs: Array<() => void> = [];

  /**
   * App constructor
   * @param {string} name
   */
  constructor(name: string = 'Express TypeScript') {
    this.app = Express();
    this.router = Router();
    this.routeResolver = new RouteResolver();
    this.app.set('name', name);
    dotenv.config();
  }

  /**
   * Init http-listener
   * @returns {"http".Server}
   */
  public serve(): any {
    this.configure();
    this.resolveRoutes();

    return this.app.listen(this.port, () => debug(`server started on http://127.0.0.1:${this.port}`));
  }

  /**
   * Add config-middleware
   * @param config
   * @param shouldEnable
   * @returns {this}
   */
  public addConfig(config: any, shouldEnable: boolean = true): App {
    if (!shouldEnable) {
      return this;
    }

    if (Array.isArray(config)) {
      this.configs = [...this.configs, ...config];
      return this;
    }

    this.configs.push(config);
    return this;
  }

  /**
   * Add route to resolver
   * @param route
   * @returns {App}
   */
  public addRoute(route: any): App {
    if (Array.isArray(route)) {
      route.forEach((routeClass) => this.routeResolver.add(routeClass));
      return this;
    }

    this.routeResolver.add(route);
    return this;
  }

  /**
   * Attach config middleware to Express
   * @returns {this}
   */
  public configure(): App {
    this.configs.forEach((config) => this.app.use(config));
    return this;
  }

  /**
   * Attach routes to router
   */
  private resolveRoutes(): void {
    this.routeResolver.addToRouter(this.router);
    this.app.use(this.router);
    this.app.use(convertToApiException);
    this.app.use(errorRoute);
    this.app.use(exceptionHandler);
  }
}
