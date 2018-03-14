import Express, { Application, Request, Response, Router, NextFunction } from 'express';
import dotenv from 'dotenv';

import debug from './common/util/debug';
import { convertToApiException, exceptionHandler, errorRoute } from './common/util/exceptionHandlers';

export default class App {

  private router: Router;
  private port: number = Number(process.env.PORT) || 3000;
  private app: Application;
  private configs: Array<() => void> = [];

  /**
   *
   * @param {string} name
   */
  constructor(name: string = 'Express TypeScript') {
    this.app = Express();
    this.router = Router();
    this.app.set('name', name);
    dotenv.config();
  }

  /**
   *
   * @returns {"http".Server}
   */
  public serve(): any {
    this.configure();
    this.addRoutes();

    return this.app.listen(this.port, () => debug(`server started on http://127.0.0.1:${this.port}`));
  }

  /**
   *
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
   *
   * @returns {this}
   */
  public configure(): App {
    this.configs.forEach((config) => this.app.use(config));
    return this;
  }

  /**
   *
   */
  private addRoutes(): void {
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
      return res.json('Wadaap');
    });

    this.app.use(this.router);
    this.app.use(convertToApiException);
    this.app.use(errorRoute);
    this.app.use(exceptionHandler);
  }
}
