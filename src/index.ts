import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import { createServer } from 'http';

import { executeOsmosis, executeTilemaker, restartOverlay } from '@essaly/controller';
import { APP_CONFIG } from '@essaly/util/config';
import { Request, Response } from 'express';

const main = async (): Promise<void> => {
  const port = APP_CONFIG.PORT;
  const router = express.Router();
  const app = express();

  app.use(cors({ origin: '*' }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/', router);

  router.post('/api/executeTilemaker', async (request: Request, response: Response): Promise<void> => {
    const res = await executeTilemaker({ request });
    response.status(200).setHeader('Content-Type', 'application/json').send(res);
  });

  router.post('/api/executeOsmosis', async (request: Request, response: Response): Promise<void> => {
    const res = await executeOsmosis({ request });
    response.status(200).setHeader('Content-Type', 'application/json').send(res);
  });

  router.post('/api/restartOverlay', async (_: Request, response: Response): Promise<void> => {
    const res = await restartOverlay();
    response.status(200).setHeader('Content-Type', 'application/json').send(res);
  });

  const server = createServer(app);
  server.listen(port, () => console.log(`🚀 Server ready at http://localhost:${port}`));
};

(async () => await main())();
