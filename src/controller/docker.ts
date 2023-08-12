import { Request } from 'express';

import { EssalyResponse, ExecuteOsmosisInput, ExecuteTilemakerInput } from '@essaly/types';
import { APP_CONFIG } from '@essaly/util/config';
import { execute } from '@essaly/util/execute';
import { Helper } from '@essaly/util/helper';

export const executeTilemaker = async ({ request }: { request: Request }): Promise<EssalyResponse> => {
  try {
    const { ESS_TASKING_PATH } = APP_CONFIG;
    if (Helper.isNullOrUndefined(ESS_TASKING_PATH)) return { metadata: { code: 500, success: false, message: 'Unknown ESSTasking path' } };

    const { input, output, config } = request.body as ExecuteTilemakerInput;
    const res = await execute({ command: `cd ${ESS_TASKING_PATH} && TILEMAKER_INPUT=${input} TILEMAKER_OUTPUT=${output} TILEMAKER_CONFIG=${config} task tilemaker:execute` });
    return { data: JSON.stringify(res), metadata: { code: 200, success: true } };
  } catch (error) {
    return { metadata: { code: 500, success: false, message: error } };
  }
};

export const executeOsmosis = async ({ request }: { request: Request }): Promise<EssalyResponse> => {
  try {
    const { ESS_TASKING_PATH } = APP_CONFIG;
    if (Helper.isNullOrUndefined(ESS_TASKING_PATH)) return { metadata: { code: 500, success: false, message: 'Unknown ESSTasking path' } };

    const { input, output } = request.body as ExecuteOsmosisInput;
    const res = await execute({ command: `cd ${ESS_TASKING_PATH} && OSMOSIS_INPUT=${input} OSMOSIS_OUTPUT=${output} task osmosis:execute` });
    return { data: JSON.stringify(res), metadata: { code: 200, success: true } };
  } catch (error) {
    return { metadata: { code: 500, success: false, message: error } };
  }
};

export const restartOverlay = async (): Promise<EssalyResponse> => {
  try {
    const { ESS_TASKING_PATH } = APP_CONFIG;
    if (Helper.isNullOrUndefined(ESS_TASKING_PATH)) return { metadata: { code: 500, success: false, message: 'Unknown ESSTasking path' } };

    const res = await execute({ command: `cd ${ESS_TASKING_PATH} && task overlay:restart` });
    return { data: JSON.stringify(res), metadata: { code: 200, success: true } };
  } catch (error) {
    return { metadata: { code: 500, success: false, message: error } };
  }
};
