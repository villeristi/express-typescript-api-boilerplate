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
  // Configs can be array of middlewares...
  .addConfig([
    compression(),
    cors(),
    bodyparser.json(),
    bodyparser.urlencoded({
      extended: true,
    }),
    helmet(),
  ])
  // ...Or single middleware where second argument is a boolean in which condition this middleware should be added
  .addConfig(morgaLogger('dev'), isDev)
  .addRoute(IndexRoute)
  .addRoute(PostRoute)
  .serve();
