import bodyparser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgaLogger from 'morgan';

import App from './app';
import IndexRoute from './modules/Index';
import PostRoute from './modules/Post';

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
  .route(IndexRoute)
  .route(PostRoute)
  .serve();
