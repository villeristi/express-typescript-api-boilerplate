import bodyparser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgaLogger from 'morgan';

import App from './app';

const isDev = process.env.NODE_ENV === 'development';

const app = new App();

export default app
  .addConfig([
    compression(),
    cors(),
    bodyparser.json(),
    bodyparser.urlencoded({
      extended: true,
    }),
    helmet(),
  ])
  .addConfig(morgaLogger('dev'), isDev)
  .serve();
