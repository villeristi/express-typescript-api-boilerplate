import bodyparser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgaLogger from 'morgan';

import { debugMiddleware } from './common/util/debug';

import App from './app';

import IndexRoute from './modules/index/Index';
import PostRoute from './modules/index/Post';
import SampleRoute from './modules/sample/Sample';
import CrudRoute from './modules/crud/Crud';

const isDev = process.env.NODE_ENV === 'development';

const app = new App();

app
  // Configs can be an array of middlewares...
  .use([
    compression(),
    cors(),
    bodyparser.json(),
    bodyparser.urlencoded({
      extended: true,
    }),
    helmet(),
  ])
  // ...Or a single middleware where the second
  // argument is a boolean which states if this
  // middleware should be enabled
  .use(morgaLogger('dev'), isDev)
  .use(debugMiddleware())
  .route([
    IndexRoute,
    PostRoute,
    SampleRoute,
    CrudRoute,
  ])
  .serve();
