import Express, { Application, Router, Response } from 'express';
import dotenv from 'dotenv';

import RouteResolver from './common/classes/RouteResolver';
import { debug } from './common/util/debug';
import { convertToApiException, exceptionHandler, notFoundException } from './common/util/exceptionHandlers';

export default class App {

  private router: Router;
  private routeResolver: RouteResolver;
  private port: number = Number(process.env.PORT) || 3000;
  private app: Application;
  private configs: any = [];

  /**
   * App constructor
   * @param {string} name
   */
  constructor(name: string = 'Express TypeScript') {
    this.app = Express();
    this.router = Router();
    this.routeResolver = new RouteResolver(this.router);
    this.app.set('name', name);
    dotenv.config();
  }

  /**
   * Init http-listener
   * @returns {"http".Server}
   */
  public serve(): any {
    this.configure();

    return this.app.listen(this.port, () => debug(`server started on http://127.0.0.1:${this.port}`));
  }

  /**
   * Add config-middleware
   * @param config
   * @param shouldEnable
   * @returns {this}
   */
  public use(config: any, shouldEnable: boolean = true): App {
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
  public route(route: any): App {
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

    // Add router & some base-handlers to configs
    this.configs = this.configs.concat([
      this.router,
      convertToApiException,
      notFoundException,
      exceptionHandler,
    ]);

    this.configs.forEach((config) => this.app.use(config));
    return this;
  }
}
