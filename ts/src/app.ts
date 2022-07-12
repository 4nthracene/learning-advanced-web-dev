import express from 'express';
import config from 'config';
import log from './logger/index';
import connect from './db/connect';
import ApplyRoutes from './routes';

const port = config.get('PORT') as number;
const host = config.get('HOST') as string;
const app = express();

async function run() {
  await connect();
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  app.listen(port, host, () => {
    log.info(`[SERVER]: Listening on http://${host}:${port}`);
    ApplyRoutes(app);
  });
}

run();
