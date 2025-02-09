import * as dotenv from 'dotenv';
dotenv.config();

import { Helper } from '@essaly/util/helper';

export const APP_CONFIG = {
  PORT: !Helper.isNullOrUndefined(process.env.APP_PORT) ? Number(process.env.APP_PORT) : 3000,
  ESS_TASKING_PATH: !Helper.isNullOrUndefined(process.env.ESS_TASKING_PATH) ? process.env.ESS_TASKING_PATH : undefined,
} as const;
