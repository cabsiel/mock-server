import {MockServerApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import * as express from 'express';

export {MockServerApplication};

export async function main(options: ApplicationConfig = {}) {
  const loopback = new MockServerApplication(options);
  await loopback.boot();

  const app = express();
  app.use('/api', loopback.requestHandler);
  app.use('/assets/svg', express.static('./img/oreal/svg'));
  app.use('/assets/png', express.static('./img/oreal/png'));
  app.listen(3000, () => {
    console.log('Listening at http://localhost:3000');
  });

  return app;
}
