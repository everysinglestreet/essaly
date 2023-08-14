import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import { createServer } from 'http';

import { executeOsmosis, executeTilemaker, regenerateOverlay, restartOverlay } from '@essaly/controller';
import { APP_CONFIG } from '@essaly/util/config';
import { EssalyLogger } from '@essaly/util/log';
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
    EssalyLogger.log(JSON.stringify(res));
    response.status(res.metadata.code).setHeader('Content-Type', 'application/json').send(res);
  });

  router.post('/api/executeOsmosis', async (request: Request, response: Response): Promise<void> => {
    const res = await executeOsmosis({ request });
    EssalyLogger.log(JSON.stringify(res));
    response.status(res.metadata.code).setHeader('Content-Type', 'application/json').send(res);
  });

  router.post('/api/restartOverlay', async (_: Request, response: Response): Promise<void> => {
    const res = await restartOverlay();
    EssalyLogger.log(JSON.stringify(res));
    response.status(res.metadata.code).setHeader('Content-Type', 'application/json').send(res);
  });

  router.post('/api/regenerateOverlay', async (request: Request, response: Response): Promise<void> => {
    const res = await regenerateOverlay({ request });
    EssalyLogger.log(JSON.stringify(res));
    response.status(res.metadata.code).setHeader('Content-Type', 'application/json').send(res);
  });

  const server = createServer(app);
  server.listen(port, () => {
    EssalyLogger.info(`🚀 Server ready at http://localhost:${port}`);
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
};

(async () => await main())();
