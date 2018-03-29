import { IDebugger } from 'debug';

declare module 'express' {
  /**
   * Inject debug to request
   */
  interface Request {
    debug: IDebugger
  }
}
