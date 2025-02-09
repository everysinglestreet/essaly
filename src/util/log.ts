import * as log4js from 'log4js';
log4js.configure({
  appenders: { default: { type: 'file', filename: 'essaly.log' } },
  categories: { default: { appenders: ['default'], level: 'all' } },
});

export const EssalyLogger = log4js.getLogger();
